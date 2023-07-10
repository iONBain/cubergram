import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";
import { v4 as uuid } from "uuid";

/**
 * This handler handles adding a comment to a particular post in the db.
 * send POST Request at /api/comments/add/:postId
 * */

export const addPostCommentHandler = function (schema, request) {
    const user = requiresAuth.call(this, request);
    try {
      if (!user) {
        return new Response(
          404,
          {},
          {
            errors: [
              "The username you entered is not Registered. Not Found error",
            ],
          }
        );
      }
      const { postId } = request.params;
      const { commentData } = JSON.parse(request.requestBody);
  
      const comment = {
        _id: uuid(),
        comment: commentData,
        username: user.username,
        createdAt: formatDate(),
        updatedAt: formatDate(),
      };
      const post = schema.posts.findBy({ _id: postId }).attrs;
      post.comments.push(comment);
      this.db.posts.update({ _id: postId }, post);
      return new Response(201, {}, { posts: this.db.posts });
    } catch (error) {
      return new Response(
        500,
        {},
        {
          error,
        }
      );
    }
  };