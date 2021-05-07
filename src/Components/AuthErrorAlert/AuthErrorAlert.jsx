import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button';

export default function AuthErrorAlert() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
    <main>
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading> <h2><strong>Yikes... 😬 </strong></h2> <br/>
            <span>This is awkward. It looks like a sign up or log in failed!</span>
        </Alert.Heading>
            <p>
              <h4>For failed <strong>Log Ins</strong>:</h4>
              <ul>
                  <li>
                      Verify it was the correct email address 
                  </li>
                  <li>
                      Make sure your caps are not on for your password
                  </li>
              </ul>
              <hr />
                 <h4>For failed <strong>Sign Ups</strong>:</h4>
              <ul>
                  <li>
                      That email address is taken. Please make sure you do not already have an account with us.
                  </li>
                  <li>
                      Weak passowrd! Please, verify your password is <strong>at least 3 characters long</strong>
                  </li>
              </ul>
            </p>
      </Alert>
    </main>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}