class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception

    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def ensure_logged_in
        render json: ['Must be logged in'] unless logged_in?
    end

    def log_in(user)
        @current_user = user
        session[:session_token] = user.reset_session_token!
    end

    def log_out
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def logged_in?
        !!current_user
    end
end
