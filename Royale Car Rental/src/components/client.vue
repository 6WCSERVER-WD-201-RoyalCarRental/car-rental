<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update Student</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="client.name" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="client.email" required>
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="client.phone" required>
                </div>
                <div class="form-group">
                    <label>Car</label>
                    <select class="form-control" v-model="client.car" required>
                    <option value="">-- Your car --</option>
                    <option value="Wigo">Toyota Wigo</option>
                    <option value="Vios">Toyota Vios</option>
                    <option value="Fortuner">Toyota Fortuner</option>
                    <option value="Hiace">Toyota Van Hiace</option>
                    <option value="Model 3">Tesla Model 3</option>
                    </select>
                </div>
                <div class="form-group">
                  <label>Date</label>
                  <input type="date" class="form-control" v-model="client.date" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            client: { }
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-client/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.client = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-client/${this.$route.params.id}`;
            axios.put(apiURL, this.client).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>