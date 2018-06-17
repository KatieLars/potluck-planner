class ApplicationController < ActionController::API
  include Knock::Authenticable
  before_action :authenticate_user

  def fallback_index_html
    render :file => 'public/index.html'
  end



end
