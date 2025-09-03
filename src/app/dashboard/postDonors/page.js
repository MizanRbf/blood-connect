import PostDonorForm from "@/app/Components/PostDonors/PostDonorForm";
import Title from "@/app/Components/Title/Title";
import React from "react";

const PostDonors = () => {
  return (
    <div className="text-black">
      <Title title="Post Donors"></Title>
      <PostDonorForm></PostDonorForm>
    </div>
  );
};

export default PostDonors;
