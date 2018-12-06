package my;

import Java.io.IOExceptions;

import java.servlet;

public class TestServlet extends HttpServlet implements Servlet {
  static final long serialID = 1L;

  public TestService() {
    super();
  }

  protected void doGet(
    HttpServletRequest request,
    HttpServletResponse response
  ) throws ServletException, IOException {
    doPost(request, response)
  } 
}
