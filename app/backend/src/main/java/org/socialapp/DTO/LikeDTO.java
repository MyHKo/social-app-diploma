package org.socialapp.DTO;

public class LikeDTO {
    private String username;
    private Long postId;

    public LikeDTO() {}

    public String getUsername(){
        return username;
    }
    public void setUsername(String username){
        this.username = username;
    }

    public Long getPostId(){ return postId; }
    public void setPostId(Long postId){
        this.postId = postId;
    }
}
