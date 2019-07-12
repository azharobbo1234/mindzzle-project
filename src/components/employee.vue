<template>
    <div class="employee">
        <div class="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left" style="width:220px;background-color: #1D232A;color:white;" id="mySidebar">
            <button class="w3-bar-item w3-button w3-large w3-hide-large" @click="w3_close()">Close &times;</button>
            <div style="background-color: #E96F24; margin-bottom: 20px"> 
                <img v-bind:src="mindzzle_logo.src" v-bind:alt="mindzzle_logo.alt" v-bind:href="mindzzle_logo.href" id="mindzzle-logo">
            </div>
            <div class="text-left ml-3">
                <p><b>MAIN MENU</b></p>
            </div>
            <router-link to="/" class="w3-bar-item w3-button">
                <span><i class="fas fa-user" style="margin-right: 10px"></i></span>Profile
            </router-link>
            <router-link to="/jobsearch" class="w3-bar-item w3-button">
                <span><i class="fas fa-briefcase" style="margin-right: 10px"></i></span>Search Job
            </router-link>
            <div style="background-color:#3E4A58;" class="pb-0 mb-0">
                <div class="text-left pl-3 pt-2 mt-1">
                    <p><b>MY WORKSPACE</b></p>
                </div>
                <div class="row m-1 text-left">
                    <div class="col-md-1" style="margin-top: 5px">
                        <i class="fas fa-circle fa-lg"></i>
                    </div>
                    <div class="col-md-10"  style="color: #FFB486;font-size: 12px;">
                        <p>PT. Sumber Solusindo Pratama</p>
                    </div>
                </div>
            </div>
            <router-link to="" class="w3-bar-item w3-button">
                <span><i class="fas fa-history" style="margin-right: 10px"></i></span>Status
            </router-link>
            <router-link to="" class="w3-bar-item w3-button">
                <span><i class="fas fa-tasks" style="margin-right: 10px"></i></span>Goals
            </router-link>
            <router-link to="" class="w3-bar-item w3-button">
                <span><i class="fas fa-tasks" style="margin-right: 10px"></i></span>Tasks
            </router-link>
            <router-link to="" class="w3-bar-item w3-button">
                <span><i class="fas fa-money-check-alt" style="margin-right: 10px"></i></span>Payroll
            </router-link>
            <router-link to="" class="w3-bar-item w3-button">
                <span><i class="fas fa-money-check-alt" style="margin-right: 10px"></i></span>Playslip
            </router-link>
            <router-link to="" class="w3-bar-item w3-button">
                <span><i class="fas fa-chart-bar" style="margin-right: 10px;"></i></span>Dashboard
            </router-link>
            <router-link to="" class="w3-bar-item w3-button">
                <span><i class="fas fa-history" style="margin-right: 10px"></i></span>Attendance
            </router-link>
            <router-link to="/employee" class="w3-bar-item w3-button">
                <span><i class="fas fa-briefcase" style="margin-right: 10px"></i></span>Employee
            </router-link>
        </div>

        <div class="w3-main" style="margin-left:220px; text-align: left">
            <div class="w3-teal">
            <button class="w3-button w3-teal w3-xlarge w3-hide-large" @click="w3_open()">&#9776;</button>
        </div>
        <nav class="navbar navbar-expand-md bg-light navbar-light justify-content-between">
            <form class="form-inline" action="/action_page.php">
                <input class="form-control" type="text" placeholder="Search">
                <a href=""><i class="fas fa-search" aria-hidden="true" style="margin-left: 20px"></i></a>
            </form>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="#"><span style="margin-right: 10px"><i class="fas fa-user-circle fa-lg"></i></span><b>Kevin</b> Alkern<span><i class="fas fa-chevron-down" style="margin-left: 20px"></i></span></a>
                </li>
            </ul>
        </nav>
        <div class="container-fluid" style="padding: 70px">
            <div class="row">
                <div class="col-xs-2">
                    <button class="btn btn-primary" style="margin-right: 10px"><b>+</b>Add Employee</button>
                </div>
                <div class="col-xs-2">
                    <button class="btn btn-outline-primary">Add Manually</button><span style="margin-left: 10px"><i class="fas fa-exclamation-circle fa-lg" style="color:#A9A9A9"></i></span>
                </div>
            </div>
            <div class="row">
                <div class="btn-group btn-group-lg btn-block" style="margin-top: 10px;">
                    <button type="button" class="btn btn-light" v-on:click="current_button('first_button')" :class="{active: first_button}">Active</button>
                    <button type="button" class="btn btn-light" v-on:click="current_button('second_button')" :class="{active: second_button}">Applicant</button>
                    <button type="button" class="btn btn-light" v-on:click="current_button('third_button')" :class="{active: third_button}">Ex-Employee</button>
                    <button type="button" class="btn btn-light" v-on:click="current_button('forth_button')" :class="{active: forth_button}">Reject</button>
                </div>
            </div>
            <div class="row" style="margin-top: 10px;">
                <div class="col-md-12" style="padding-left: 0px;padding-right: 0px">
                    <div class="card p-5">
                        <div class="table-responsive-lg text-left">
                            <table class="table" id="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Division</th>
                                        <th>Age</th>
                                        <th>Contract</th>
                                        <th style="text-align: center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="employee in active_employee" v-bind:key="employee.name">
                                        <td>{{employee.name}}</td>
                                        <td>{{employee.division}}</td>
                                        <td>{{employee.age}}</td>
                                        <td>{{employee.contract}}</td>
                                        <td style="text-align: center">
                                            <button class="btn btn-success btn-sm" style="margin-right: 10px">De-Assigned</button>
                                            <button class="btn btn-secondary btn-sm">Terminate</button>
                                        </td>
                                    </tr>
                                </tbody>
                                
                                <!-- <div v-else-if="applicant_bol">
                                    <tbody>
                                        <tr v-for="employee in applicant_employee" v-bind:key="employee.name">
                                            <td>{{employee.name}}</td>
                                            <td>{{employee.division}}</td>
                                            <td>{{employee.age}}</td>
                                            <td>{{employee.contract}}</td>
                                            <td style="text-align: center">
                                                <button class="btn btn-success btn-sm" style="margin-right: 10px">De-Assigned</button>
                                                <button class="btn btn-secondary btn-sm">Terminate</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </div>
                                    -->
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:"employee",
    data() {
        return {
            test:false,
            active_bol: true,
            applicant_bol: false,
            first_button: true,
            second_button: false,
            third_button: false,
            forth_button: false,
            dummy_pic: {
                        src: "https://i.ibb.co/M53KbYw/dummy-image-square.jpg", 
                        alt: "dummy_pic",
                        href: "#"
                        },
            mindzzle_logo: {
                        src: "https://i.ibb.co/7n4RhVh/Mindzzle-Logo-240px.png", 
                        alt: "mindzzle_logo",
                        href: "#"
                        },
            active_employee: [
                {name:"Azhar Difa", division:"Staff", age:"19", contract:"24/09/2019"},
                {name:"Laksono Bramantio", division:"Staff", age:"20", contract:"25/09/2019"},
                {name:"Bramanta Nararya", division:"Staff", age:"21", contract:"26/09/2019"},
                {name:"Luiz Adam", division:"Board", age:"22", contract:"27/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"}
                ],
            applicant_employee: [
                {name:"applicant", division:"Staff", age:"19", contract:"24/09/2019"},
                {name:"Laksono Bramantio", division:"Staff", age:"20", contract:"25/09/2019"},
                {name:"Bramanta Nararya", division:"Staff", age:"21", contract:"26/09/2019"},
                {name:"Luiz Adam", division:"Board", age:"22", contract:"27/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"},
                {name:"Muhammad Farris", division:"Board", age:"23", contract:"28/09/2019"}
                ]
        }
    },
    methods :{
        current_button(msg) {
            if (msg == "first_button") {
                this.first_button = true
                this.active_bol = true
                this.second_button = false
                this.applicant_bol = false
                this.third_button = false
                this.forth_button = false
            } else if (msg == "second_button") {
                this.first_button = false
                this.active_bol = false
                this.second_button = true
                this.applicant_bol = true
                this.third_button = false
                this.forth_button = false
            } else if (msg == "third_button") {
                this.first_button = false
                this.second_button = false
                this.third_button = true
                this.forth_button = false
            } else if (msg == "forth_button") {
                this.first_button = false
                this.second_button = false
                this.third_button = false
                this.forth_button = true
            } 
        },
        employee_menu(tmp) {
            if (tmp == "educations") {
                this.educations_slide = !this.educations_slide
            }
            else if (tmp == "experiences") {
                this.experiences_slide = !this.experiences_slide
            }
             else if (tmp == "achievement") {
                this.achievement_slide = !this.achievement_slide
            }
             else if (tmp == "certification") {
                this.certification_slide = !this.certification_slide
            }
        },
        w3_open() {
            document.getElementById("mySidebar").style.display = "block";
        },
        w3_close() {
            document.getElementById("mySidebar").style.display = "none";
        }  
    },
    mounted() {
        $("#table").dataTable();
    }
}
</script>

<style>


</style>
