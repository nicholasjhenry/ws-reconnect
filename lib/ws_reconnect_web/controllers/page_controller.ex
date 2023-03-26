defmodule WsReconnectWeb.PageController do
  use WsReconnectWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
