import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import { Button } from "react-bootstrap";
const Loading = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
           <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span >Loading...</span>
          </Button>
        </div>
      );
}

export default Loading
