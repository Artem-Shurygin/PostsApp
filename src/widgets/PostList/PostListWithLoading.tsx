import type { FC } from "react";
import { withLoading } from "@/shared/lib/hoc/WithLoading";
import { PostList } from "./PostList";

export const PostListWithLoading: FC = withLoading(PostList);
