import Layout from "../../components/Layout";
import fetch from "isomorphic-fetch";

const User = ({ user }) => {
  return (
    <Layout>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
            <div className='card-header text-center'>
              <img src={user.avatar} alt='' style={{ borderRadius: "50%" }} />
            </div>
            <div className='card-body'>
              <h3>
                {user.id}, {user.first_name} {user.last_name}
              </h3>
              <p>Email: {user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

User.getInitialProps = async (ctx) => {
  const response = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
  const resJson = await response.json();
  return { user: resJson.data };
};

export default User;
