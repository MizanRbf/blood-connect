import PostRequestForm from "@/app/Components/PostRequests/PostRequestForm";
import Title from "@/app/Components/Title/Title";
import React from "react";

const PostRequests = () => {
  return (
    <div>
      <div className="text-black">
        <Title title="Post Requests"></Title>
      </div>
      <PostRequestForm></PostRequestForm>
    </div>
  );
};

export default PostRequests;
