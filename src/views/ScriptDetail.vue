<template>
  <div class="scriptdetail">
    <div>
      <b-jumbotron :header="script.scriptName" :lead="script.university">
        <p>{{ script.scriptContent }}</p>
      </b-jumbotron>
    </div>
    <div class="row d-flex">
      <div class="col-md-8 col-lg-6">
        <div class="card shadow-0 border" style="background-color: #f0f2f5">
          <div class="card-body p-4">
            <div class="form-outline mb-4">
              <form @submit.prevent="postComment">
                <input
                  v-model="comment"
                  type="text"
                  class="form-control"
                  placeholder="Type comment..."
                  required
                /><br />
                <button type="submit" class="button">Comment</button>
              </form>
            </div>

            <div class="card mb-4">
              <div
                class="card-body"
                v-for="comment in comments"
                :key="comment.id"
              >
                <h4>{{ comment.comment }}</h4>

                <div class="d-flex justify-content-between">
                  <div class="d-flex flex-row align-items-center">
                    <p class="small mb-0 ms-2 user_email">
                      {{ comment.userEmail }}
                    </p>
                  </div>
                  <span v-if="auth.userEmail == comment.userEmail">
                    <a @click.prevent="deleteComm(comment.comment)">
                      <i class="fa fa-trash-o" aria-hidden="true"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Posts, Auth, Service } from "@/services";

export default {
  props: ["id"],
  data() {
    return {
      script: null,
      auth: Auth.state,
      comment: "",
      comments: [],
    };
  },
  created() {
    this.getComments();
  },
  async mounted() {
    this.script = await Posts.getOneScript(this.id);
  },
  methods: {
    async getComments() {
      this.comments = await Posts.getAllComments(this.id);
    },
    async postComment(e) {
      let comm = {
        comment: this.comment,
        scriptId: this.script.id,
        userEmail: this.auth.userEmail,
      };
      let result = await Posts.addComment(comm);
      console.log("Saved comment: ", result.data);
      this.getComments();
      this.comment = "";
    },
    deleteComm(comm) {
      let comment = {
        comm: comm,
      };
      Service.post(`/delete/${comm}`, comment).then((result) => {
        console.log(result, "deleted");
        this.getComments();
      });
    },
  },
  name: "script-detail",
};
</script>

<style>
@import "../assets/css/ScriptDetail.css";
</style>