import { createEntityAdapter } from "@reduxjs/toolkit";
import type { User } from "@/entities/users/model/types";

export const usersAdapter = createEntityAdapter<User>();
