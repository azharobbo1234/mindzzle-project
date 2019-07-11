<template>
    <div class="tugas_pertama">
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
                <span><i class="fas fa-id-card" style="margin-right: 10px;"></i></span>Dashboard
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
        <!-- navbar navbar navbar navbar navbar  -->
        <nav class="navbar navbar-expand-md bg-light navbar-light justify-content-between">
            <form class="form-inline" action="/action_page.php">
                <div class="input-group">
                    <input class="col form-control" id="search_bar" type="text" placeholder="Search">
                </div>
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
                <div class="col-md-9" id="profile"><h1>Profile</h1></div>
                <div class="col-md-3">
                    <button class="btn btn-success mindzzle-button-2" id="download_pdf">
                        <p class="mindzzle-text">
                        <span style="margin-right: 10px"><i class="fas fa-download"></i></span>download as pdf
                        </p>
                    </button>
                </div>
            </div>
            <div class="row">
                <!-- userprofile -->
                <div class="col-lg-4">
                    <div class="card">
                        <div id="fake-header">
                            <h5 class="text-muted" style="text-align: center">Edit Profile<span style="margin-left: 10px"><a @click="edit_profile" class="clickable_icon"><i class="fas fa-pencil-alt"></i></a></span></h5>
                        </div>
                        <br><img class="card-img-top" id="image-card" src="https://i.ibb.co/vXF6Xxs/dummy-man-570x570.png" alt="Card image cap">







                        <!-- batas -->
                        <div class="card-body" v-if="show_profile">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item text-center">
                                    <h3>{{user_data.name}}</h3>
                                    <h5 class="text-muted">{{user_data.headline}}</h5>
                                </li>
                                <li class="list-group-item text-left">
                                    <br><h5 class="card-text">About</h5>
                                    <p class="card-text" style="font-size: 15px; text-align: left">{{user_data.about}}</p>
                                    <h5 class="card-text">Contact Information</h5><br>
                                    <p class="card-text text-muted">E-mail Address:</p>
                                    <p class="card-text">{{user_data.email}}</p>
                                    <p class="card-text text-muted">Phone Number:</p>
                                    <p class="card-text">{{user_data.phone}}</p>
                                    <p class="card-text text-muted">Address:</p>
                                    <p class="card-text">{{user_data.address}}</p>
                                </li>
                            </ul>
                        </div>
                        <div class="card-body" v-else>
                            <div class="text-left">
                                <div class="form-group">
                                    <label>Full Name</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" v-model="tmp_data.name">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Headline</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" v-model="tmp_data.headline">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Profile Description</label>
                                    <div class="input-group">
                                        <textarea class="form-control" rows="4" cols="50" name="comment" form="usrform" v-model="tmp_data.about"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>E-mail Address</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" v-model="tmp_data.email">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Phone Number</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" v-model="tmp_data.phone">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Address</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control" v-model="tmp_data.address">
                                    </div>
                                </div>
                                <button class="btn btn-success btn-block mt-3" v-on:click="edit_user()">Submit</button>
                            </div>
                        </div>
                        <!-- batas -->





            
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-body text-left">
                            <div class="card-title mb-4">
                                <h3>Top 5 Skill</h3>
                            </div>
                            <div id="job-description">
                                <div class="row mt-3">
                                    <div class="col-md-3 text-muted"><h5>JavaScript</h5></div>
                                    <div class="col-md-6 text-center mindzzle_rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                        </div>
                                    <div class="col-md-3 text-right"><button class="btn btn-success mindzzle-button"><p class="mindzzle-text">Verified</p></button></div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-3 text-muted"><h5>AngularJS</h5></div>
                                    <div class="col-md-6 text-center mindzzle_rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </div>
                                    <div class="col-md-3 text-right"><button class="btn btn-success mindzzle-button"><p class="mindzzle-text">Verified</p></button></div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-3 text-muted"><h5>CSS</h5></div>
                                    <div class="col-md-6 text-center mindzzle_rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </div>
                                    <div class="col-md-3 text-right"><button class="btn btn-secondary mindzzle-button"><p class="mindzzle-text" style="font-size: 12px">Not Verified</p></button></div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-3 text-muted"><h5>SaSS</h5></div>
                                    <div class="col-md-6 text-center mindzzle_rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </div>
                                    <div class="col-md-3 text-right"><button class="btn btn-secondary mindzzle-button"><p class="mindzzle-text" style="font-size: 12px">Not Verified</p></button></div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-3 text-muted"><h5>React Native</h5></div>
                                    <div class="col-md-6 text-center mindzzle_rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </div>
                                    <div class="col-md-3 text-right"><button class="btn btn-secondary mindzzle-button"><p class="mindzzle-text" style="font-size: 12px">Not Verified</p></button></div>
                                </div>
                                <!-- hidden_skill hidden_skill hidden_skill -->
                                <!-- hidden_skill hidden_skill hidden_skill -->
                                <transition name="fade">
                                    <div v-if="show_skill">
                                        <div class="row mt-3">
                                            <div class="col-md-3 text-muted"><h5>Python</h5></div>
                                            <div class="col-md-6 text-center mindzzle_rating">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                            <div class="col-md-3 text-right"><button class="btn btn-secondary mindzzle-button"><p class="mindzzle-text" style="font-size: 12px">Not Verified</p></button></div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-3 text-muted"><h5>Java</h5></div>
                                            <div class="col-md-6 text-center mindzzle_rating">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                            <div class="col-md-3 text-right"><button class="btn btn-secondary mindzzle-button"><p class="mindzzle-text" style="font-size: 12px">Not Verified</p></button></div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-3 text-muted"><h5>Flask</h5></div>
                                            <div class="col-md-6 text-center mindzzle_rating">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                            <div class="col-md-3 text-right"><button class="btn btn-secondary mindzzle-button"><p class="mindzzle-text" style="font-size: 12px">Not Verified</p></button></div>
                                        </div>
                                    </div>
                                </transition>
                                <!-- hidden_skill hidden_skill hidden_skill -->
                                <!-- hidden_skill hidden_skill hidden_skill -->  
                            </div>
                            <div class="text-center mindzzle-text" id="show-more">
                                <a style="color: #3E4A58;" @click="show_skill = !show_skill" class="clickable_icon">Show More<span><i class="fas fa-chevron-down" style="margin-left: 10px"></i></span></a>
                            </div>
                        </div>
                    </div>
                    <div class="btn-group btn-group-lg btn-block" style="margin-top: 10px">
                        <button type="button" class="btn btn-light" v-on:click="current_button('first_button')" :class="{active:first_button}">Experiences</button>
                        <button type="button" class="btn btn-light" v-on:click="current_button('second_button')" :class="{active:second_button}">Educations</button>
                        <button type="button" class="btn btn-light" v-on:click="current_button('third_button')" :class="{active:third_button}">Achievement</button>
                        <button type="button" class="btn btn-light" v-on:click="current_button('forth_button')" :class="{active:forth_button}">certification</button>
                    </div>
                    <div class="card" style="margin-top: 10px">
                        <div class="card-body">
                            <div class="text-right">
                                <div v-if="first_button">
                                    <a data-toggle="modal" data-target="#experiences_modal" class="clickable_icon"><i class="fas fa-pencil-alt fa-lg"></i></a>
                                </div>
                                <div v-else-if="second_button">
                                    <a data-toggle="modal" data-target="#educations_modal" class="clickable_icon"><i class="fas fa-pencil-alt fa-lg"></i></a>
                                </div>
                                <div v-else-if="third_button">
                                    <a data-toggle="modal" data-target="#achievement_modal" class="clickable_icon"><i class="fas fa-pencil-alt fa-lg"></i></a>
                                </div>
                                <div v-else>
                                    <a data-toggle="modal" data-target="#certification_modal" class="clickable_icon"><i class="fas fa-pencil-alt fa-lg"></i></a>
                                </div>
                            </div>
                            <div id="job-description">
                                <!-- experiences experiences experiences -->
                                <!-- experiences experiences experiences -->
                                    <ul class="list-group list-group-flush text-left" v-if="experiences_bol">
                                    <div v-for="(n, index) in experiences.length" :key="index">
                                        <li class="list-group-item" v-if="index < 2">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <img v-bind:src="dummy_pic.src" v-bind:alt="dummy_pic.alt" v-bind:href="dummy_pic.href" id="dummy_pic">
                                                </div>
                                                <div class="col-md-6">
                                                    <h4>{{experiences[index].title}}</h4>
                                                    <p>
                                                        <span style="color: #E96F24;">{{experiences[index].subtitle}}</span><br>
                                                        {{experiences[index].date}}<br>
                                                        {{experiences[index].location}}
                                                    </p>
                                                </div>
                                                <div class="col-md-3 bottom">
                                                    <button class="btn mindzzle-button" v-bind:class="[experiences[index].btn_template]"><p class="mindzzle-text">Verified</p></button>
                                                </div>
                                            </div>
                                        </li>
                                        <transition name="fade">
                                            <li class="list-group-item" v-if="index >= 2" v-show="experiences_slide">
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <img v-bind:src="dummy_pic.src" v-bind:alt="dummy_pic.alt" v-bind:href="dummy_pic.href" id="dummy_pic">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <h4>{{experiences[index].title}}</h4>
                                                        <p>
                                                            <span style="color: #E96F24;">{{experiences[index].subtitle}}</span><br>
                                                            {{experiences[index].date}}<br>
                                                            {{experiences[index].location}}
                                                        </p>
                                                    </div>
                                                    <div class="col-md-3 bottom">
                                                        <button class="btn mindzzle-button" v-bind:class="[experiences[index].btn_template]"><p class="mindzzle-text">Verified</p></button>
                                                    </div>
                                                </div>
                                            </li>
                                        </transition>
                                    </div>
                                </ul>
                                <!-- educations educations educations  -->
                                <!-- educations educations educations  -->
                                <ul class="list-group list-group-flush text-left" v-if="educations_bol">
                                    <div v-for="(n, index) in educations.length" :key="index">
                                        <li class="list-group-item" v-if="index < 2">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <img v-bind:src="dummy_pic.src" v-bind:alt="dummy_pic.alt" v-bind:href="dummy_pic.href" id="dummy_pic">
                                                </div>
                                                <div class="col-md-6">
                                                    <h4>{{educations[index].title}}</h4>
                                                    <p>
                                                        <span>{{educations[index].subtitle}}</span><br>
                                                        {{educations[index].date}}<br>
                                                        {{educations[index].location}}
                                                    </p>
                                                </div>
                                                <div class="col-md-3 bottom">
                                                    <button class="btn mindzzle-button" v-bind:class="[educations[index].btn_template]"><p class="mindzzle-text">Verified</p></button>
                                                </div>
                                            </div>
                                        </li>
                                        <transition name="fade">
                                            <li class="list-group-item" v-if="index >= 2" v-show="educations_slide">
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <img v-bind:src="dummy_pic.src" v-bind:alt="dummy_pic.alt" v-bind:href="dummy_pic.href" id="dummy_pic">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <h4>{{educations[index].title}}</h4>
                                                        <p>
                                                            <span>{{educations[index].subtitle}}</span><br>
                                                            {{educations[index].date}}<br>
                                                            {{educations[index].location}}
                                                        </p>
                                                    </div>
                                                    <div class="col-md-3 bottom">
                                                        <button class="btn mindzzle-button" v-bind:class="[educations[index].btn_template]"><p class="mindzzle-text">Verified</p></button>
                                                    </div>
                                                </div>
                                            </li>
                                        </transition>
                                    </div>
                                </ul>
                                <!-- achievement achievement achievement -->
                                <!-- achievement achievement achievement -->
                                <ul class="list-group list-group-flush text-left" v-if="achievement_bol">
                                    <div v-for="(n, index) in achievement.length" :key="index">
                                        <li class="list-group-item" v-if="index < 2">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <img v-bind:src="dummy_pic.src" v-bind:alt="dummy_pic.alt" v-bind:href="dummy_pic.href" id="dummy_pic">
                                                </div>
                                                <div class="col-md-6">
                                                    <h4>{{achievement[index].title}}</h4>
                                                    <p>
                                                        <span style="color: #E96F24;">{{achievement[index].subtitle}}</span><br>
                                                        {{achievement[index].date}}<br>
                                                        {{achievement[index].location}}
                                                    </p>
                                                </div>
                                                <div class="col-md-3 bottom">
                                                    <button class="btn mindzzle-button" v-bind:class="[achievement[index].btn_template]"><p class="mindzzle-text">Verified</p></button>
                                                </div>
                                            </div>
                                        </li>
                                        <transition name="fade">
                                            <li class="list-group-item" v-if="index >= 2" v-show="achievement_slide">
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <img v-bind:src="dummy_pic.src" v-bind:alt="dummy_pic.alt" v-bind:href="dummy_pic.href" id="dummy_pic">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <h4>{{achievement[index].title}}</h4>
                                                        <p>
                                                            <span style="color: #E96F24;">{{achievement[index].subtitle}}</span><br>
                                                            {{achievement[index].date}}<br>
                                                            {{achievement[index].location}}
                                                        </p>
                                                    </div>
                                                    <div class="col-md-3 bottom">
                                                        <button class="btn mindzzle-button" v-bind:class="[achievement[index].btn_template]"><p class="mindzzle-text">Verified</p></button>
                                                    </div>
                                                </div>
                                            </li>
                                        </transition>
                                    </div>
                                </ul>
                                <!-- certification certification certification -->
                                <!-- certification certification certification -->
                                <ul class="list-group list-group-flush text-left" v-if="certification_bol">
                                    <div v-for="(n, index) in certification.length" :key="index">
                                        <li class="list-group-item" v-if="index < 2">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <img v-bind:src="dummy_pic.src" v-bind:alt="dummy_pic.alt" v-bind:href="dummy_pic.href" id="dummy_pic">
                                                </div>
                                                <div class="col-md-6">
                                                    <h4>{{certification[index].title}}</h4>
                                                    <p>
                                                        <span style="color: #E96F24;">{{certification[index].subtitle}}</span><br>
                                                        {{certification[index].date}}<br>
                                                        {{certification[index].location}}
                                                    </p>
                                                </div>
                                                <div class="col-md-3 bottom">
                                                    <button class="btn mindzzle-button" v-bind:class="[certification[index].btn_template]"><p class="mindzzle-text">Verified</p></button>
                                                </div>
                                            </div>
                                        </li>
                                        <transition name="fade">
                                            <li class="list-group-item" v-if="index >= 2" v-show="certification_slide">
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <img v-bind:src="dummy_pic.src" v-bind:alt="dummy_pic.alt" v-bind:href="dummy_pic.href" id="dummy_pic">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <h4>{{certification[index].title}}</h4>
                                                        <p>
                                                            <span style="color: #E96F24;">{{certification[index].subtitle}}</span><br>
                                                            {{certification[index].date}}<br>
                                                            {{certification[index].location}}
                                                        </p>
                                                    </div>
                                                    <div class="col-md-3 bottom">
                                                        <button class="btn mindzzle-button" v-bind:class="[certification[index].btn_template]"><p class="mindzzle-text">Verified</p></button>
                                                    </div>
                                                </div>
                                            </li>
                                        </transition>
                                    </div>
                                </ul>
                            </div>
                            <div class="text-center mindzzle-text" id="show-more">
                                <a style="color: #3E4A58;" @click="slide_menu(slide_info)" class="clickable_icon">Show More<span><i class="fas fa-chevron-down" style="margin-left: 10px"></i></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- experiences_modal -->
        <div class="modal fade" id="experiences_modal" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Experience Preview</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <!-- preview -->
                    <div class="text-left m-4">
                        <div class="row">
                            <div class="col-md-3">
                                <img v-bind:src="dummy_pic.src" v-bind:alt="dummy_pic.alt" v-bind:href="dummy_pic.href" id="dummy_pic">
                            </div>
                            <div class="col-md-6">
                                <h4>{{experiences_entry.position}}</h4>
                                <p>
                                    <span style="color: #E96F24;">
                                        <div v-if="experiences_entry.company != ''">
                                            {{experiences_entry.company}}
                                        </div>
                                    </span>
                                    <span>
                                        <div v-if="experiences_entry.start_year != '' || experiences_entry.end_year != ''">
                                            {{experiences_entry.start_year}} - {{experiences_entry.end_year}}<br>
                                        </div>
                                    </span>
                                    {{experiences_entry.location}}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-body m-3">
                        <div class="row">
                            <div class="col-lg-6">
                                <form class="text-left">
                                    <div class="form-group">
                                        <label>Position/Title</label>
                                        <input type="text" class="form-control" placeholder="Front-End Intern" v-model="experiences_entry.position">
                                    </div>
                                    <div class="form-group">
                                        <label>Company Name</label>
                                        <input type="text" class="form-control" placeholder="Wiredstamp Studio" v-model="experiences_entry.company">
                                    </div>
                                    <div class="form-group">
                                        <label>Start Date</label>
                                        <input type="date" class="form-control" v-model="experiences_entry.start_year">
                                    </div>
                                </form>
                            </div>
                            <div class="col-lg-6">
                                <form class="text-left">
                                    <div class="form-group">
                                        <label>Location</label>
                                        <input type="text" class="form-control" placeholder="Jakarta, Indonesia" v-model="experiences_entry.location">
                                    </div>
                                    <div class="form-group">
                                        <label>Company Email</label>
                                        <input type="email" class="form-control" placeholder="email@wiredstamp.io" v-model="experiences_entry.email">
                                    </div>
                                    <div class="form-group">
                                        <label>End Date</label>
                                        <input type="date" class="form-control" v-model="experiences_entry.end_year">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success btn-block" @click="add_experience" data-dismiss="modal">Add New Experience</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- educations_modal -->
        <div class="modal fade" id="educations_modal" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Education Preview</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="text-left m-4">
                        <div class="row">
                            <div class="col-md-3">
                                <img v-bind:src="dummy_pic.src" v-bind:alt="dummy_pic.alt" v-bind:href="dummy_pic.href" id="dummy_pic">
                            </div>
                            <div class="col-md-6">
                                <h4>{{educations_entry.name}}</h4>
                                <p>
                                    <span>
                                        <div v-if="educations_entry.degree_title != ''">
                                            {{educations_entry.degree_title}} degree, {{educations_entry.field_study}}
                                        </div>
                                    </span>
                                    <span>
                                        <div v-if="educations_entry.start_year != '' || educations_entry.end_year != ''">
                                            {{educations_entry.start_year}} - {{educations_entry.end_year}}<br>
                                        </div>
                                    </span>
                                    {{educations_entry.location}}
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body m-3">
                        <div class="row">
                            <div class="col-lg-6">
                                <form class="text-left">
                                    <div class="form-group">
                                        <label>School/Institution Name</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="SMA N 1 Yogyakarta" v-model="educations_entry.name">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Degree</label>
                                        <div class="input-group">
                                            <!-- <input type="text" class="form-control" placeholder="High School"> -->
                                            <select class="form-control" v-model="educations_entry.degree_title">
                                                <option v-for="degree in degrees" :value="degree">{{degree}}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Start Year</label>
                                        <div class="input-group">
                                            <input type="date" class="form-control" placeholder="2017" v-model="educations_entry.start_year">
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="col-lg-6">
                                <form class="text-left">
                                    <div class="form-group">
                                        <label>Location</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Yogyakarta, Indonesia" v-model="educations_entry.location">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Field of Study</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" v-model="educations_entry.field_study" placeholder="Business Management">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>End Year (or expected)</label>
                                        <div class="input-group">
                                            <input type="date" class="form-control" v-model="educations_entry.end_year">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success btn-block" @click="add_education" data-dismiss="modal">Add New Education</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- achievement_modal -->
        <div class="modal fade" id="achievement_modal" role="dialog">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Achievement Preview</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="text-left m-4">
                        <div class="row">
                            <div class="col-md-3">
                                <img v-bind:src="dummy_pic.src" v-bind:alt="dummy_pic.alt" v-bind:href="dummy_pic.href" id="dummy_pic">
                            </div>
                            <div class="col-md-6">
                                <h4>{{achievement_entry.title}}</h4>
                                <p>
                                    <span style="color: #E96F24;">
                                        <div v-if="achievement_entry.promoter != ''">
                                            Awarded by: {{achievement_entry.promoter}}
                                        </div>
                                    </span>
                                    <span>
                                        <div v-if="achievement_entry.start_year != ''">
                                            {{achievement_entry.start_year}}<br>
                                        </div>
                                    </span>
                                    {{achievement_entry.location}}
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body m-3">
                        <div class="row">
                            <div class="col-lg-6">
                                <form class="text-left">
                                    <div class="form-group">
                                        <label>Title</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Finalis of IT-Today 2017" v-model="achievement_entry.title">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Promoter</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="IT-Today IPB 2017" v-model="achievement_entry.promoter">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Date</label>
                                        <div class="input-group">
                                            <input type="date" class="form-control" placeholder="2017" v-model="achievement_entry.start_year">
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="col-lg-6">
                                <form class="text-left">
                                    <div class="form-group">
                                        <label>Location</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Bogor, Indonesia" v-model="achievement_entry.location">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Scope</label>
                                        <div class="input-group">
                                            <!-- <input type="text" class="form-control" v-model="educations_entry.field_study" placeholder="Business Management"> -->
                                            <select class="form-control" v-model="achievement_entry.scope">
                                                <option v-for="scope in scopes" :value="scope">{{scope}}</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success btn-block" @click="add_achievement" data-dismiss="modal">Add New Education</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
$(function () {
   $('#modal').modal('toggle');
});
export default {
    name:"tugas_pertama",
    data() {
        return {
            nama: "azhar",
            show_profile: true,
            first_button: true,
            second_button: false,
            third_button: false,
            forth_button: false,
            tmp_data: {
                name:"Kevin Alkern",
                headline: "Front-End Engineer at Mindzzle",
                about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
                email: "kevalkern@mindzzle.com",
                phone: "082115917118",
                address: "Jl. Haji Naim No. 46, Cipete, Fatmawati, Jakarta Selatan"
            },
            user_data: {
                name:"Kevin Alkern",
                headline: "Front-End Engineer at Mindzzle",
                about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
                email: "kevalkern@mindzzle.com",
                phone: "082115917118",
                address: "Jl. Haji Naim No. 46, Cipete, Fatmawati, Jakarta Selatan"
            },
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
            experiences: [
                {title: "Front-End Engineer", subtitle: "Mindzzle", date: "Sep 2018 - Present", location: "Bekasi, Indonesia", btn_template: "btn-success"},
                {title: "Front-End Intern", subtitle: "Wiredstamp Studio", date: "Jan 2018 - Jul 2018", location: "Singapore", btn_template: "btn-success"},
                {title: "Back-End Intern", subtitle: "Bukalapak", date: "Jul 2017", location: "Jakarta, Indonesia", btn_template: "btn-success"},
                {title: "Web Developer Intern", subtitle: "Tokopedia", date: "Jun 2017", location: "Jakarta, Indonesia", btn_template: "btn-success"}
                ],
            experiences_bol: true,
            experiences_slide: false,
            educations: [
                {title: "Universitas Indonesia", subtitle: "Bachelors degree, Computer Science", date: "Sep 2014 - Oct 2018", location: "Depok, Indonesia", btn_template: "btn-success"},
                {title: "Front-End Intern", subtitle: "Wiredstamp Studio", date: "Jul 2011 - Jun 2014", location: "Kuningan, Jakarta", btn_template: "btn-success"},
                {title: "SMA Al-bayan Sukabumi", subtitle: "Sekolah Mengengah Atas", date: "Jul 2014 - Jul 2017", location: "Sukabumi", btn_template: "btn-success"},
                {title: "SMP Asyifa Subang", subtitle: "Sekolah Menengah Pertama", date: "Jul 2011 - Jun 2014", location: "Subang", btn_template: "btn-success"}
                ],
            educations_bol: false,
            educations_slide: false,
            achievement: [
                {title: "Winner of DevCamp", subtitle: "Awarded by: NSM.co", date: "july 2018", location: "Jakarta", btn_template: "btn-success"},
                {title: "Winner of Hackathon", subtitle: "Awarded by: Wiredstamp Studio", date: "April 2018", location: "Singapore", btn_template: "btn-secondary"},
                {title: "Finalis of IT-Today 2017", subtitle: "Awarded by: Compfest X", date: "February 2017", location: "Jakarta", btn_template: "btn-success"},
                {title: "Finalis of GameJam 2016", subtitle: "Awarded by: Ubisoft", date: "Agustus 2016", location: "Jakarta", btn_template: "btn-success"}
                ],
            achievement_bol: false,
            achievement_slide: false,
            certification: [
                {title: "Vue.js", subtitle: "Certified by: mindzzle", date: "july 2019", location: "Jakarta", btn_template: "btn-success"},
                {title: "Django", subtitle: "Certified by: mindzzle", date: "july 2019", location: "Jakarta", btn_template: "btn-success"},
                {title: "HTML", subtitle: "Certified by: mindzzle", date: "july 2019", location: "Jakarta", btn_template: "btn-success"},
                {title: "CSS", subtitle: "Certified by: mindzzle", date: "july 2019", location: "Jakarta", btn_template: "btn-success"}
                ],
            certification_bol: false,
            certification_slide: false,
            show_skill: false,
            slide_info: "experiences",
            degrees: ["High School", "Bachelor", "Master", "Doctoral"],
            experiences_entry: {
                position: "",
                company: "",
                location: "",
                email: "",
                start_year: "",
                end_year: ""
            },
            educations_entry: {
                name: "",
                degree_title: "",
                start_year: "",
                end_year: "",
                location: "",
                field_study: ""
            },
            achievement_entry: {
                title: "",
                promoter: "",
                scope: "",
                start_year: "",
                end_year: "",
                location: ""
            },
            scopes: ["Regional", "National", "International"]
        }
    },
    methods :{
        current_button(msg) {
            if (msg == "first_button") {
                this.first_button = true
                this.experiences_bol = true
                this.second_button = false
                this.educations_bol = false
                this.third_button = false
                this.achievement_bol = false
                this.forth_button = false
                this.certification_bol = false
                this.slide_info = "experiences"
            } else if (msg == "second_button") {
                this.first_button = false
                this.experiences_bol = false
                this.second_button = true
                this.educations_bol = true
                this.third_button = false
                this.achievement_bol = false
                this.forth_button = false
                this.certification_bol = false
                this.slide_info = "educations"
            } else if (msg == "third_button") {
                this.first_button = false
                this.experiences_bol = false
                this.second_button = false
                this.educations_bol = false
                this.third_button = true
                this.achievement_bol = true
                this.forth_button = false
                this.certification_bol = false
                this.slide_info = "achievement"
            } else if (msg == "forth_button") {
                this.first_button = false
                this.experiences_bol = false
                this.second_button = false
                this.educations_bol = false
                this.third_button = false
                this.achievement_bol = false
                this.forth_button = true
                this.certification_bol = true
                this.slide_info = "certification"
            }
        },
        slide_menu(tmp) {
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
        edit_profile() {
            this.show_profile = !this.show_profile
            this.tmp_data.name = this.user_data.name
            this.tmp_data.headline = this.user_data.headline
            this.tmp_data.about = this.user_data.about
            this.tmp_data.email = this.user_data.email
            this.tmp_data.phone = this.user_data.phone
            this.tmp_data.address = this.user_data.address
        },
        edit_user() {
            this.user_data.name = this.tmp_data.name
            this.user_data.headline = this.tmp_data.headline
            this.user_data.about = this.tmp_data.about
            this.user_data.email = this.tmp_data.email
            this.user_data.phone = this.tmp_data.phone
            this.user_data.address = this.tmp_data.address
            alert("Data is saved")
        },
        add_education() {
            this.educations.push({
                title: this.educations_entry.name,
                subtitle: this.educations_entry.degree_title + " degree, " + this.educations_entry.field_study,
                date: this.educations_entry.start_year + " - " + this.educations_entry.end_year,
                location: this.educations_entry.location,
                btn_template: "btn-success"
                })
            this.educations_entry.name = ""
            this.educations_entry.degree_title = ""
            this.educations_entry.start_year = ""
            this.educations_entry.end_year = ""
            this.educations_entry.location = ""
            this.educations_entry.field_study = ""
        },
        add_experience() {
            this.experiences.push({
                title: this.experiences_entry.position,
                subtitle: this.experiences_entry.company,
                date: this.experiences_entry.start_year + " - " + this.experiences_entry.end_year,
                location: this.experiences_entry.location,
                btn_template: "btn-success"
                })
            this.experiences_entry.position = ""
            this.experiences_entry.company = ""
            this.experiences_entry.start_year = ""
            this.experiences_entry.end_year = ""
            this.experiences_entry.location = ""
            this.experiences_entry.email = ""
        },
        add_achievement() {
            this.achievement.push({
                title: this.achievement_entry.title,
                subtitle: this.achievement_entry.promoter,
                date: this.achievement_entry.start_year,
                location: this.achievement_entry.location,
                btn_template: "btn-success"
                })
            this.achievement_entry.title = ""
            this.achievement_entry.promoter = ""
            this.achievement_entry.start_year = ""
            this.achievement_entry.scope = ""
            this.achievement_entry.location = ""
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
.active_button {
    margin: 50px;
}
#profile {
    text-align: left;
}
#download_pdf {
    float: right;
}
#image-card {
    width: 150px;
    height: 150px;
    margin-left: auto;
    margin-right: auto;
}
#fake-header {
    margin: 20px;
}
.mindzzle-button {
    width: 96px;
    height: 30px;
    
}
.mindzzle-button-2 {
    width: 200px;
    height: 30px;
    
}
.mindzzle-text {
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
}
.mindzzle-text-2 {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
}
#job-description {
    padding-bottom: 20px;
    border-bottom: 1px solid #c4c4c4;
}
#show-more {
    margin-top: 20px;
}
#dummy_pic {
    width: 144px;
    height: 144px;
}
.bottom {
    margin-top: auto;
    margin-bottom: auto;
}
#mindzzle-logo {
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    margin-bottom: 30px;
}
.sidebar-title {
    font-size: 15px;
    font-weight: bold;
}

/* sidebar styling */
#sidebar-content {
    color: white;
    text-align: left;
}
#sidebar-content #workspace {
    background-color:#3E4A58;
    padding-top: 10px;
}
.left-filler {
    margin-left: 20px;
}

/* skill styling */
.mindzzle_rating {
    color: #FFBD00;
}
.fade-enter-active {
  transition: opacity .5s;
}
.fade-enter {
  opacity: 0.5;
}

/* clickable icon */
.clickable_icon {
    cursor: pointer;
}

input {
    width: 300px !important;
}

/* user_profile styling */
</style>

<!-- ******* ******* *** sidebar *** ******* ******* -->
            <!-- ******* ******* sidebar sidebar ******* ******* -->
            <!-- ******* sidebar sidebar sidebar sidebar ******* -->
            <!-- sidebar sidebar sidebar sidebar sidebar sidebar -->
            <!-- ******* sidebar sidebar sidebar sidebar ******* -->
            <!-- ******* ******* sidebar sidebar ******* ******* -->
            <!-- ******* ******* *** sidebar *** ******* ******* -->

            <!-- <div class="col-lg-2" style="background-color: #1D232A;">
                <div class="row" id="sidebar-logo" style="background-color: #E96F24; margin-bottom: 20px">
                    <img v-bind:src="mindzzle_logo.src" v-bind:alt="mindzzle_logo.alt" v-bind:href="mindzzle_logo.href" id="mindzzle-logo">
                </div>
                <div id="sidebar-content">
                    <div class="row">
                        <div class="left-filler">
                            <p class="sidebar-title">MAIN MENU</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="left-filler">
                            <router-link to='/' style="color: white"><p><span><i class="fas fa-user" style="margin-right: 10px"></i></span>Profile</p></router-link>
                        </div>
                    </div>
                    <div class="row">
                        <div class="left-filler">
                            <p><span><i class="fas fa-briefcase" style="margin-right: 10px"></i></span>Search Job</p>
                        </div>
                    </div>
                    <div class="row" id="workspace">
                        <div class="left-filler">
                            <p class="sidebar-title">YOUR WORKSPACE</p>
                            <div class="row">
                                <div class="col-md-1" style="margin-top: 5px">
                                    <i class="fas fa-circle fa-lg"></i>
                                </div>
                                <div class="col-md-7"  style="color: #FFB486;font-size: 12px;">
                                    <p>PT. Sumber Solusindo Pratama</p>
                                </div>
                                <div class="col-md-1"><i class="fas fa-sort-down"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="row" style="margin-top: 10px">
                        <div class="left-filler">
                            <p><span><i class="fas fa-id-card" style="margin-right: 10px;"></i></span>Dashboard</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="left-filler">
                            <p><span><i class="fas fa-history" style="margin-right: 10px"></i></span>Approval Status</p>    
                        </div>
                    </div>
                    <div class="row">
                        <div class="left-filler">
                            <p><span><i class="fas fa-tasks" style="margin-right: 10px"></i></span>Company Goals</p>    
                        </div>
                    </div>
                    <div class="row">
                        <div class="left-filler">
                            <p><span><i class="fas fa-tasks" style="margin-right: 10px"></i></span>Tasks</p>
                        </div>   
                    </div>
                    <div class="row">
                        <div class="left-filler">
                            <p><span><i class="fas fa-money-check-alt" style="margin-right: 10px"></i></span>Playslip</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="left-filler">
                            <p><span><i class="fas fa-history" style="margin-right: 10px"></i></span>Manage Attendance</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="left-filler">
                            <p><span><i class="fas fa-money-check-alt" style="margin-right: 10px"></i></span>Manage Payroll</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="left-filler">
                            <router-link to='/employee' style="color: white"><span><i class="fas fa-money-check-alt" style="margin-right: 10px;"></i></span>Employee</router-link>
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- ******* ******* *** sidebar *** ******* ******* -->
            <!-- ******* ******* sidebar sidebar ******* ******* -->
            <!-- ******* sidebar sidebar sidebar sidebar ******* -->
            <!-- sidebar sidebar sidebar sidebar sidebar sidebar -->
            <!-- ******* sidebar sidebar sidebar sidebar ******* -->
            <!-- ******* ******* sidebar sidebar ******* ******* -->
            <!-- ******* ******* *** sidebar *** ******* ******* -->



            <!-- content ******* content ******* content *******  -->
            <!-- content ******* content ******* content *******  -->
            <!-- content ******* content ******* content *******  -->
            <!-- content ******* content ******* content *******  -->
            <!-- content ******* content ******* content *******  -->
            <!-- content ******* content ******* content *******  -->