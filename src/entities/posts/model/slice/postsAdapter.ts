import { createEntityAdapter } from "@reduxjs/toolkit";
import type { Post } from "@/entities/posts/model/types";

export const postsAdapter = createEntityAdapter<Post>({});
