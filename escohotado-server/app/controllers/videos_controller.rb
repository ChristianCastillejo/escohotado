class VideosController < ApplicationController
    before_action :set_video, only: [:show, :update, :destroy]
  
    # GET /videos
    def index
      render json: Video.all
    end
  
    # POST /videos
    def create
      @video = Video.create!(video_params)
  
      params['tag'].each do |t|
        tag = Tag.find_by(name: t)
        @video.tags << tag
      end
      render json: @video
    end
  
    # GET /videos/:id
    def show
      render json: @video
    end
  
    # PUT /videos/:id
    def update
      @video.update(video_params)
      head :no_content
    end
  
    # DELETE /videos/:id
    def destroy
      @video.destroy
      head :no_content
    end
  
    def search_by_tags
      @videos = Video.all
  
      unless params["tags"] === ""
        tags = params["tags"].split(',')
        @videos = Video.joins(:tags)
        .where(tags: { name: tags })
        .group('videos.id')
        .having('count(*) = ?', tags.count)
      end
  
      unless params["search"] === "false"
        @videos = @videos.where("title_sp ILIKE ? or description_sp ILIKE ? or title_en ILIKE ? or description_en ILIKE ?", "%#{params["search"]}%", "%#{params["search"]}%", "%#{params["search"]}%", "%#{params["search"]}%")
      end
  
      render json: @videos
    end
  
    private
  
    def video_params
      # whitelist params
      params.permit(:title_sp, :title_en, :description_sp, :description_en, :url, :date, tags: [])
    end
  
    def set_video
      @video = Video.find(params[:id])
    end
  end