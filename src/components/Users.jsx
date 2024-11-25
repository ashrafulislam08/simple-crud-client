import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();

  const handleDelete = (id) => {
    console.log("Delete", id);

    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted successfully");
        }
      });
  };

  return (
    <div>
      <h1>Users: {users.length}</h1>
      <div
        style={{
          textAlign: "left",
        }}
      >
        {users.map((user) => (
          <p key={user._id}>
            🔥 {user.name}
            <button onClick={() => handleDelete(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
