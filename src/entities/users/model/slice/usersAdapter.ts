import { createEntityAdapter } from "@reduxjs/toolkit";
import type { User } from "@/entities/users/api/usersApi";

export const usersAdapter = createEntityAdapter<User>();
