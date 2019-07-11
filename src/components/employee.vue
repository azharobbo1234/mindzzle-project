<template>
    <div class="tugas_pertama">
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
        <div class="container-fluid">
            <div class="wrapper mt-5">
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
                                <table class="table" id="tableu">
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
$(document).ready(function(){
    $('#tableu').dataTable();
});
export default {
    name:"tugas_pertama",
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
        }
    }
}
</script>

<style>


</style>
