import { createEntityAdapter } from "@reduxjs/toolkit";
import type { Post } from "@/entities/posts/api/postsApi";

export const postsAdapter = createEntityAdapter<Post>({});
