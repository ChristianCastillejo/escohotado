class ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :update, :destroy]

  # GET /articles
  def index
    render json: Article.all
  end

  # POST /articles
  def create
    @article = Article.create!(article_params)

    params['tag'].each do |t|
      tag = Tag.find_by(name: t)
      @article.tags << tag
    end
    render json: @article
  end

  # GET /articles/:id
  def show
    render json: @article
  end

  # PUT /articles/:id
  def update
    @article.update(article_params)
    head :no_content
  end

  # DELETE /articles/:id
  def destroy
    @article.destroy
    head :no_content
  end

  def search_by_tags
    @articles = Article.all

    unless params["tags"] === ""
      tags = params["tags"].split(',')
      @articles = Article.joins(:tags)
      .where(tags: { name: tags })
      .group('articles.id')
      .having('count(*) = ?', tags.count)
    end

    unless params["search"] === "false"
      @articles = @articles.where("title_sp ILIKE ? or body_sp ILIKE ? or title_en ILIKE ? or body_en ILIKE ?", "%#{params["search"]}%", "%#{params["search"]}%", "%#{params["search"]}%", "%#{params["search"]}%")
    end

    render json: @articles
  end

  private

  def article_params
    # whitelist params
    params.permit(:title_sp, :body_sp, :title_en, :body_en, :images, :date, tags: [])
  end

  def set_article
    @article = Article.find(params[:id])
  end
end