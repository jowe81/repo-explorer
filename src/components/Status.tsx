import { Alert } from 'react-bootstrap';

export default function Status(props: any) {
  return (
    <div>
      {props.message && <Alert variant="primary">{props.message}</Alert>}
      {props.error && <Alert variant="danger">Error: {props.error}</Alert>}
    </div>
  );
}
