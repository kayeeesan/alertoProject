<script setup>
import { ref } from 'vue';

const container = ref(null);

const toggleActive = () => {
  container.value.classList.toggle('active');
};
</script>

<template>
  <div ref="container" class="container">
    <div class="form-box login">
      <form @submit.prevent="">
        <h1>Login</h1>
        <div class="input-box">
          <input type="text" placeholder="Username" />
        </div>
        <div class="input-box">
          <input type="password" placeholder="Password" />
        </div>
        <div class="forgot-link">
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit" class="btn">Login</button>
      </form>
    </div>
    <div class="form-box register">
      <form @submit.prevent="">
        <h1>Register</h1>
        <v-row class="ml-1">
          <v-col style="padding: 0 !important;">
            <div class="input-box mr-2">
              <input type="text" placeholder="First Name" />
            </div>
          </v-col>
          <v-col style="padding: 0 !important;">
            <div class="input-box mr-2">
              <input type="text" placeholder="Last Name" />
            </div>
          </v-col>
        </v-row>
       
        <v-row class="ml-1">
          <v-col style="padding: 0 !important;">
            <div class="input-box mr-2">
              <input type="text" placeholder="Email Address" />
            </div>
          </v-col>
          <v-col style="padding: 0 !important;">
            <div class="input-box mr-2">
              <input type="Password" placeholder="Password" />
            </div>
          </v-col>
        </v-row>

        <v-row class="ml-1">
          <v-col style="padding: 0 !important;">
            <div class="input-box mr-2">
              <input type="text" placeholder="Mobile No." />
            </div>
          </v-col>
          <v-col style="padding: 0 !important;">
            <div class="input-box mr-2">
              <input type="text" placeholder="Position/Role" />
            </div>
          </v-col>
        </v-row>

        <v-row class="ml-1">
          <v-col style="padding: 0 !important;">
            <div class="input-box mr-2">
              <input type="text" placeholder="Government Agency" />
            </div>
          </v-col>
          <v-col style="padding: 0 !important;">
            <div class="input-box mr-2">
              <input type="text" placeholder="Region" />
            </div>
          </v-col>
        </v-row>

        <v-row class="ml-1">
          <v-col style="padding: 0 !important;">
            <div class="input-box mr-2">
              <input type="text" placeholder="Province" />
            </div>
          </v-col>
          <v-col style="padding: 0 !important;">
            <div class="input-box mr-2">
              <input type="text" placeholder="City" />
            </div>
          </v-col>
        </v-row>

        <v-row class="ml-1">
          <v-col style="padding: 0 !important;">
            <div class="input-box mr-2">
              <input type="text" placeholder="Riverbasin Assigned" />
            </div>
          </v-col>
          <v-col style="padding: 0 !important;">
            <div class="input-box mr-2">
              <input type="text" placeholder="LGU Facebook (if any)" />
            </div>
          </v-col>
        </v-row>
        <button type="submit" class="btn mt-10">Register</button>
      </form>
    </div>

    <div class="toggle-box">
      <div class="toggle-panel toggle-left">
        <h1>No Account?</h1>
        <button class="btn" @click="toggleActive">Register</button>
      </div>
      <div class="toggle-panel toggle-right">
        <h1>Already have an account?</h1>
        <button class="btn" @click="toggleActive">Login</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
	body{
		margin: 0;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		background: linear-gradient(90deg, #e2e2e2, #cd96ff) ;
	}
	.container{
		position: relative;
		width: 850px;
		height: 550px;
		background: #fff;
		border-radius: 30px;
		box-shadow: 0 0 30px rgba(0, 0, 0, .2);
		overflow: hidden;
	}
  .input-box input{
    padding: 5px;
    border-radius: 11px;
    width: 100%;
    margin-top: 20px;
    background: rgb(204, 201, 201);
  }
	.form-box{
		position: absolute;
		right: 0;
		width: 50%;
		height: 100%;
		background: #fff;
		display: flex;
		align-items: center;
		color: #333;
		text-align: center;
		z-index: 1;
		transition: .6s ease-in-out 1.2s visibility 0s 1s ;
    padding: 20px;
	}

	.container.active .form-box {
		right: 50%;
	}
	.form-box.register
	{
		visibility: hidden;
	}

	.container.active .form-box.register{
		visibility: visible;
	}
	form{
		width: 100%;
	}

	.toggle-box
	{
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.toggle-box::before{
		content: '';
		position: absolute;
		width: 300%;
		height: 100%;
		background: #011A6E;
		z-index: 2;
		left: -250%;
		border-radius: 150px;
		transition: 1.8s ease-in-out;
	}

	.toggle-panel{
		position: absolute;
		width: 50%;
		height: 100%;
		/* background: seagreen; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #fff;
		z-index: 2;
		transition: .6s ease-in-out;
	}

	.toggle-panel.toggle-left{
		left: 0;
		transition-delay: .6s;
	}

	.container.active .toggle-panel.toggle-left{
		left: -50%;
		transition-delay: .6s ;
	}

	.container.active .toggle-box::before{
		left: 50%;
	}

	.container.active .toggle-panel.toggle-right{
		right: 0;
		transition-delay: 1.2s ;
	}

	.toggle-panel.toggle-right{
		right: -50%;
		transition-delay: .6s;
	}

	.toggle-panel p{
		margin-bottom:  20px;

	}

	.toggle-panel .btn{
		width: 160px;
		height: 46px;
		background: transparent;
		border: 2px solid #fff;
		box-shadow: none;
	}
	.btn{
		cursor: pointer;
    width: 160px;
		height: 46px;
		background: #011A6E;
		box-shadow: none;
    color: white;
    border-radius: 99px;
    margin-top: 10px;
	}

	@media screen and (max-width: 650px){
		.container{
			height: calc(100vh - 40px);
		}
		.form-box{
			width: 100%;
			height: 70%;
			bottom: 0;
		}

		.container.active .form-box{
			right: 0;
			bottom: 30%;
		}

		.toggle-box::before{
			width: 100%;
			height: 300%;
			left: 0;
			top: -270%;
			border-radius: 20vw;
		}

		.container.active .toggle-box::before{
			top: 70%;
			left: 0;
		}

		.container.active .toggle-panel.toggle-left{
			left: 0;
			top: -30%;
		}

		.toggle-panel{
			width: 100%;
			height: 30%;
		}

		.toggle-panel.toggle-left{
			top: 0;
		}

		.toggle-panel.toggle-right{
			right: 0;
			bottom: -30%;
		}

		.container.active .toggle-panel.toggle-right{
			bottom: 0;
		}
	}
	</style>