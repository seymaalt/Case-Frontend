import { Box, Container, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Button } from "../../components";
import { getUsers } from "../../services/UserService";
import { useNavigate } from 'react-router-dom';

export default function UserList() {
    const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{
            color: "header.main",
            fontWeight: "bold",
            fontSize: "32px",
            textAlign: "center",
            mt: 1,
          }}
          gutterBottom
        >
          User List
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Button onClick={() => {navigate("/register")}}>Add User</Button>
        </Stack>
        <List
          sx={{
            width: "100%",
            maxWidth: "100%",
            bgcolor: "background.paper",
            mt: 2,
          }}
        >
          {users.map((user) => (
            <ListItem key={user.id}>
              <ListItemText primary={`${user.name} ${user.surname}`} secondary={`Age: ${user.age} | Gender: ${user.gender}`} />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
}
