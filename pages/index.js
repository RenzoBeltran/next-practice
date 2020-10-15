import Layout from "../components/Layout";
import Users from "../components/Users";
import fetch from "isomorphic-fetch";

const Index = ({ users }) => {
  return (
    <Layout>
      <h1>Users from Placeholder</h1>
      <Users users={users} />
    </Layout>
  );
};

Index.getInitialProps = async (ctx) => {
  const response = await fetch("https://reqres.in/api/users");
  const resJson = await response.json();
  return { users: resJson.data };
};

export default Index;
