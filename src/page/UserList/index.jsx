import * as React from 'react';
import {
  Box,
  Container,
  ListItemButton,
  Rating,
  Stack,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from '@mui/material';
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
          <Button onClick={() => {navigate("/signUp")}}>Add User</Button>
        </Stack>
        <List
          sx={{
            width: "100%",
            maxWidth: "100%",
            mt: 2,
          }}
        >
          {users.map((user) => (
            <React.Fragment key={user.id}>
              <ListItem alignItems="flex-start">
                <>
                  <ListItemText
                    primary={
                      <React.Fragment>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          spacing={2}>
                          <Stack direction="column">
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="h6"
                            >
                              {user.name}{" "}{user.surname}
                            </Typography>
                            <Typography
                              component="span"
                            >
                            <Typography component="span" sx={{ fontWeight: 'bold' }}>Tc No:</Typography> {user.tcNo}
                            </Typography>
                          </Stack>
                        </Stack>
                      </React.Fragment>
                    }
                    secondary={<>
                      <Typography component="span" sx={{ fontWeight: 'bold' }}>Age:</Typography> {user.age} | <Typography component="span" sx={{ fontWeight: 'bold' }}>Gender:</Typography> {user.gender}
                    </>}
                  />
                </>
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      </Container>
    </Box>
  );
}
