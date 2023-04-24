import { useEffect } from "react";
import { createContext } from "react";
import { fakeFetch } from "../Data/Apis";
import { useState } from "react";

export const EmailContext = createContext();

export const EmailContextProvider = ({ children }) => {
  const [emaildata, setEmaildata] = useState(null);
  console.log(emaildata, "yes");

  useEffect(() => {
    (async () => {
      try {
        const { status, data } = await fakeFetch(
          "https://example.com/api/allemails"
        );
        if (status === 200) {
          setEmaildata(data);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const readUnreadHandler = (item) => {
    // setEmaildata((prev) => ({
    //   ...prev,
    //   emails: prev.emails.map(
    //     (email) =>
    //       email.id === item.id ? { ...email, read: !email.read } : { ...email } // here we are using {...email} instead of email because it will change the original array
    //   ),
    // }));

    setEmaildata((prev) => {
      return {
        ...prev,
        emails: prev.emails.reduce((acc, curr) => {
          if (curr.id === item.id) {
            return [...acc, { ...curr, read: !curr.read }];
          } else {
            return [...acc, { ...curr }];
          }
        }, []),
      };
    });
  };

  return (
    <div>
      <EmailContext.Provider value={{ emaildata, readUnreadHandler }}>
        {children}
      </EmailContext.Provider>
    </div>
  );
};
