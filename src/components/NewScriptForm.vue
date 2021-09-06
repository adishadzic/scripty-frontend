<template>
  <div>
    <img
      v-b-modal.modal-1
      class="header__icon"
      src="../assets/header-icons/plus-icon.svg"
    />

    <b-modal id="modal-1" centered title="Add new file" hide-footer>
      <b-form @submit.prevent="uploadScript" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Script name:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.scriptName"
            type="text"
            placeholder="Script name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="File:" label-for="input-2">
          <b-form-file
            name="file"
            v-model="form.file"
            :state="Boolean(form.file)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <div class="mt-3">
            Selected file: {{ form.file ? form.file.name : "" }}
          </div>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="University:"
          label-for="input-3"
        >
          <b-form-select
            id="input-3"
            v-model="form.university"
            :options="universities"
            required
          ></b-form-select>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import { Posts } from "@/services";

export default {
  data() {
    return {
      form: {
        scriptName: "",
        university: null,
        file: "",
      },

      universities: [
        { text: "Select one university", value: null },
        "Sveučilište Jurja Dobrile u Puli",
        "Fakultet organizacije i informatike",
        "Pravni fakultet Osijek",
        "Fakultet zdravstvenih studija Sveučilišta u Rijeci",
        "Effectus Visoko učilište",
      ],
      show: true,
    };
  },
  created: async function () {
    const filename = this.$route.params.filename;
    await Posts.getFile(filename);
  },
  methods: {
    onReset(event) {
      event.preventDefault();
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    async uploadScript() {},
  },
};
</script>