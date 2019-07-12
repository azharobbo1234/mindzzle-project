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
            <router-link to="" class="w3-bar-item w3-button">
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
                <div class="col-lg-8" style="display: inline-block">
                    <div class="row p-3" style="background-color: white; margin: auto" id="searchbar">
                        <form class="form-inline">
                            <div class="form-group">
                                <input style="margin-right: 25px" type="text" class="form-control form-control-sm" placeholder="Jakarta"></input>
                            </div>
                            <div class="form-group" style="border-left: 1px solid #8D8D8D;">
                                <input style="margin-left: 25px;" type="text" class="form-control form-control-sm" placeholder="Search for Title, Company, or Keywords..." ></input>
                            </div>
                        </form>
                    </div>
                    <div class="row" style="margin: auto; padding-top: 10px;">
                        <h4>Filter Jobs<span class="clickable_icon"><i class="fas fa-stream" style="font-size: 15px; margin-left: 10px"></i></span></h4>
                    </div>
                    <div class="card p-2" style="margin-top: 10px" v-for="job in jobs" :value="job" v-bind:key="job">
                        <div class="row no-gutters">
                            <div class="col-md-3" style="margin: auto;">
                                <img class="ml-4" v-bind:src="mindzzle_logo2.src" v-bind:alt="mindzzle_logo2.alt" v-bind:href="mindzzle_logo2.href" id="mindzzle-logo2">
                            </div>
                            <div class="col-md-5">
                                <div class="card-body">
                                    <p class="card-title" style="color:#256FC5;font-weight: bold; font-size: 20px">{{job.name}}</p>
                                    <p class="card-text" style="font-size: 17px">Mindzzle<br><small class="text-muted">Last updated {{job.update}} ago</small></p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card-body text-right">
                                    <p class="card-text">
                                        <span style="color:#E96F24;">Rp {{job.lowest_salary}} - Rp {{job.highest_salary}}</span><br>
                                        <span style="color:#1CAA53;" v-if="job.nego">Gaji Dapat Dinegosiasi</span>
                                        <span style="color:#1CAA53;" v-else>Gaji Tidak Dapat Dinegosiasi</span><br>
                                        <small class="text-muted">{{job.category}}</small><br>
                                        <small class="text-muted">{{job.location}}</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body text-center">
                            <img v-bind:src="mindzzle_logo2.src" v-bind:alt="mindzzle_logo2.alt" v-bind:href="mindzzle_logo2.href">
                            <p class="card-text mt-2">
                                Senior UX Designer<br>
                                <small class="text-muted">Mindzzle (PT. Sumber Solusindo Pratama)</small><br>
                                <span style="color: #E96F24;">Rp 7,000,000 - Rp 13,000,000</span>
                            </p>
                            <button class="btn btn-primary m-2" style="width: 200px;">Apply</button>
                            <button class="btn btn-outline-primary m-1" style="width: 200px;"><span style="margin-right: 10px;"><i class="fas fa-envelope"></i></span>Apply Via Email</button>    
                            <div class="text-left" style="padding-top: 25px;">
                                <p><b>Minimum Qualifications</b></p>
                                <p class="card-text" style="font-size: 12px; color:#3E4A58;">
                                    - Proven experience as a UX Designer, UI Designer or similar role
                                    <br>- Strong portfolio of design projects
                                    <br>- Background in project management and research
                                    <br>- Familiarity with interaction design and information architecture
                                    <br>- Proficient in design software (e.g. UXPin, Balsamiq)
                                    <br>- Knowledge of HTML/CSS; JavaScript is a plus
                                    <transition name="fade">
                                        <div v-show="minimum_bol">
                                            - Problem-solving aptitude
                                            <br>- Analytical mind with a business acumen
                                            <br>- Excellent communication skills
                                            <br>- BSc in Design, Computer Science, Engineering or a related field    
                                        </div>
                                    </transition>
                                </p>
                                <button class="btn btn-outline-primary btn-sm" @click="show_minimum" id="rm_btn">Read More</button>
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
export default {
    name:"jobsearch",
    data() {
        return {
            minimum_bol: false,
            mindzzle_logo: {
                src: "https://i.ibb.co/7n4RhVh/Mindzzle-Logo-240px.png", 
                alt: "mindzzle_logo",
                href: "#"
            },
            mindzzle_logo2: {
                src: "https://i.ibb.co/ZHxMYcy/mindzzle-logo-144px-3x.png", 
                alt: "mindzzle_logo2",
                href: "#"
            },
            jobs: [
                {
                    name: "Junior Front-End Engineer", company: "Mindzzle", update: "2 days",
                    lowest_salary: "4,500,000", highest_salary: "6,500,000", nego: true,
                    category: "Full Time", location: "Kota Jakarta Pusat"
                },
                {
                    name: "Junior Back-End Engineer", company: "Mindzzle", update: "3 days",
                    lowest_salary: "6,500,000", highest_salary: "8,500,000", nego: false,
                    category: "Full Time", location: "Kota Jakarta Pusat"
                },
                {
                    name: "Front-End Intern", company: "Mindzzle", update: "4 days",
                    lowest_salary: "1,500,000", highest_salary: "3,000,000", nego: true,
                    category: "Internship", location: "Kota Jakarta Pusat"
                },
                {
                    name: "Back-End Intern", company: "Mindzzle", update: "5 days",
                    lowest_salary: "2,500,000", highest_salary: "4,000,000", nego: false,
                    category: "Internship", location: "Kota Jakarta Pusat"
                },
                {
                    name: "Senior UX Designer", company: "Mindzzle", update: "6 days",
                    lowest_salary: "7,000,000", highest_salary: "13,000,000", nego: true,
                    category: "Full Time", location: "Kota Jakarta Pusat"
                },
                {
                    name: "Product Manager", company: "Mindzzle", update: "7 days",
                    lowest_salary: "5,000,000", highest_salary: "9,000,000", nego: true,
                    category: "Full Time", location: "Kota Jakarta Pusat"
                },
                {
                    name: "Talent Acquistion Intern", company: "Mindzzle", update: "8 days",
                    lowest_salary: "4,500,000", highest_salary: "6,500,000", nego: false,
                    category: "Full Time", location: "Kota Jakarta Pusat"
                },        
            ]
        }
    },
    methods :{
        show_minimum() {
            var btnText = document.getElementById("rm_btn");
            this.minimum_bol = !this.minimum_bol;
            if (this.minimum_bol == true) {
                btnText.innerHTML = "Read Less";
            }
            else {
                btnText.innerHTML = "Read More";
            }
        },
        w3_open() {
            document.getElementById("mySidebar").style.display = "block";
        },
        w3_close() {
            document.getElementById("mySidebar").style.display = "none";
        }
    }
}
</script>
<style>
.clickable_icon {
    cursor: pointer;
}
.row {
    /* border: 2px solid green; */
}
#mindzzle-logo {
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    margin-bottom: 30px;
}
#mindzzle-logo2 {
    width: 100px;
    height: 100px;
    border: 1px solid #C4C4C4;
    border-radius: 10px;
}
.card {
    border: 1px solid white;
    border-radius: 10px;
}

#searchbar {
    border: 1px solid white;
    border-radius: 10px;
}
</style>
