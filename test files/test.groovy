import com.sap.gateway.ip.core.customdev.util.Mesage;
import java.util.HashMap;

def Message processData(Message message) {
  //comment
  def body = message.getBody();
  message.setBody(body + "modified")

  return method;
} 

class Security extends AbstractPortofinoRealm {
  public static final String ADMIN_GROUP_NAME = "admin";
  public static final String ADMIN_GROUP_MANAGER_NAME = "project-manager";

  private static final Logger logger = LoggerFactory.getLogger(Security.class);

}
