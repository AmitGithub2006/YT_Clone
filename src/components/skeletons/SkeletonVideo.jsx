import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonVideo = () => {
  return (
    <div style={{ width: "100%", margin: "1rem 0" }}>
      <SkeletonTheme color="#343a40" highlightColor="#3c4147">
        <Skeleton height={180} />
        <div style={{display:"flex"}}>
          <Skeleton
            style={{ marginRight: "0.5rem" }}
            circle
            height={40}
            width={40}
          />
          <Skeleton height={40} width={255} />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonVideo;
