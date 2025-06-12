package org.socialapp.Service;

import org.socialapp.model.Entity.CommentEntity;
import org.socialapp.model.Entity.PostEntity;
import org.socialapp.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    public List<CommentEntity> getCommentsByPost(PostEntity post) {
        return commentRepository.findAllByPost(post);
    }

    public int countCommentsByPost(PostEntity post) {
        return commentRepository.countAllByPost(post);
    }

    public CommentEntity createComment(CommentEntity comment) {
        return commentRepository.save(comment);
    }

    public void deleteComment(CommentEntity comment) {
        commentRepository.delete(comment);
    }
}
