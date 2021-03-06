class UsersController < ApplicationController
  before_action :authenticate_user!, only: [:current]
  before_action :set_user, only: [:show, :update, :destroy]

  # POST /signup
  # return authenticated token upon signup
  def create
    user = User.create!(user_params)
    auth_token = AuthenticateUser.new(user.email, user.password).call
    response = { message: Message.account_created, auth_token: auth_token }
    render json: @user
  end

  def current
    @user = User.find(current_user.id)
    render json: @user
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

  def user_params
    params.permit(session: [
      :name,
      :email,
      :password,
      :password_confirmation
  ])
  end
end
