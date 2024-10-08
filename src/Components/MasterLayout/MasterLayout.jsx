
import { Outlet } from 'react-router-dom';

export default function MasterLayout() {
  return (
    <div>
      <div className="container-fluid" style={{ padding: 0, marginTop: 0 }}>
        <div className="row">
          <div className="col-md-12">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
