import { useContext } from "react";
import { EmailContext } from "../main";
import { Link } from "react-router-dom";

export const Inbox = () => {
  const { emaildata, readUnreadHandler } = useContext(EmailContext);
  console.log(emaildata, "no");

  const readFilter = emaildata?.emails.filter((item) => item.read);
  const unreadFilter = emaildata?.emails.filter((item) => !item.read);
  console.log(readFilter, "read");
  return (
    <div>
      <h3>Inbox</h3>
      <p>Read Emails {readFilter?.length}</p>
      <p>UnRead Emails {unreadFilter?.length}</p>
      <ul>
        {emaildata?.emails.map((item) => (
          <li key={item.id}>
            <Link to = {`/email/${item.id}`}>{item.subject}</Link>
            <button onClick={() => readUnreadHandler(item)}>
              {item.read ? "Mark as Unread" : "Mark as read"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
