<?php
if (count($_POST) > 0) {
    $company = filter_var($_POST['company'] ?? '', FILTER_SANITIZE_STRING);
    $firstname = filter_var($_POST['firstname'] ?? '', FILTER_SANITIZE_STRING);
    $lastname = filter_var($_POST['lastname'] ?? '', FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST['message'] ?? '', FILTER_SANITIZE_STRING);
    if ($firstname !== '' && $lastname !== '' && $email !== '' && $message !== '') {
        $to = 'mail@tobias-weichart.de';
        $subject = 'New E-Mail via contact form';
        $headers = 'From: ' . $email;
        $text = 'From: ' . $firstname . ' ' . $lastname . ($company !== '' ? ' (' . $company . ')' : '') . "\n";
        $text .= 'Email: ' . $email . "\n";
        $text .= "Message:\n" . $message . "\n\n";
        @mail($to, $subject, $text, $headers);
        http_response_code(200);
    } else {
        http_response_code(400);
    }
    exit(1);
}
?>
<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="My name is Tobias Weichart, or Toby for short and I'm a Senior Software Engineer."/>
    <meta name="keywords" content="PHP,JavaScript,Laravel,VueJS,Docker,Kubernetes,Programming">
    <meta name="author" content="Tobias Weichart">
    <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
    <link rel="stylesheet" href="/css/app.css">
    <title>Tobias Weichart</title>
    <!-- Twitter Card data -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@tweichart">
    <meta name="twitter:title" content="Tobias Weichart - Senior Software Engineer">
    <!-- Open Graph data -->
    <meta property="og:title" content="Tobias Weichart - Senior Software Engineer"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://www.tobias-weichart.de/"/>
    <meta property="og:image" content="https://www.tobias-weichart.de/images/logo_square.jpg"/>
    <meta property="og:image:width" content="600"/>
    <meta property="og:image:height" content="600"/>
    <meta property="og:description" content="My name is Tobias Weichart, or Toby for short and I'm a Senior Software Engineer."/>
    <meta property="og:site_name" content="Tobias Weichart"/>
</head>
<body>
<header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a href="#" class="navbar-brand">
        </a>
        <button type="button" data-toggle="collapse" data-target="#navigation"
                aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation"
                class="navbar-toggler">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navigation" class="collapse navbar-collapse">
            <ul class="nav navbar-nav ml-auto">
                <li class="nav-item">
                    <a href="#home" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#about" class="nav-link">About</a>
                </li>
                <li class="nav-item">
                    <a href="#focus" class="nav-link">Focus</a>
                </li>
                <li class="nav-item">
                    <a href="#experience" class="nav-link">Experience</a>
                </li>
                <li class="nav-item">
                    <a href="#contact" class="nav-link">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
</header>
<main class="container-fluid" data-spy="scroll" data-target="#navigation" id="main">
    <div class="row parallax" id="home">
        <div class="col-12 text-center p-5">
            <h1>Tobias Weichart</h1>
            <h3>Software Enthusiast</h3>
        </div>
    </div>
    <div class="row" id="about">
        <div class="col-12 text-center p-5">
            <div class="row">
                <div class="col-12">
                    <h1>About Me</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-3 hidden-md-down"></div>
                <div class="col-12 col-md-9">
                    <div class="row">
                        <div class="col-12 col-md-4 p-3 p-md-2 d-flex flex-row align-items-start justify-content-around">
                            <span class="description ">Residence: </span>
                            <a href="https://goo.gl/maps/VKwRrQ1DH592" target="_blank">
                                Regensburg, Germany
                            </a>
                        </div>
                        <div class="col-12 col-md-4 p-3 p-md-2 d-flex flex-row align-items-start justify-content-center">
                            <span class="description">Age: </span>
                            <span id="age">0</span> (ish)
                        </div>
                        <div class="col-12 col-md-4 p-3 p-md-2 d-flex flex-row align-items-start justify-content-around">
                            <span class="description">Workplace: </span>
                            <a href="https://goo.gl/maps/VKwRrQ1DH592" target="_blank">
                                Regensburg, Germany
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-3 p-5 d-flex flex-column justify-content-center">
                    <div class="logo bg-light">
                    </div>
                </div>
                <div class="col-12 col-md-9 p-0 p-md-5 d-flex flex-column justify-content-center text-justify">
                    <div class="text">
                        Hey pals, my name is Tobias Weichart, or Toby for short and I'm a programming enthusiast always
                        on the look out for cool technologies. Describing myself is somewhat a harder job than I
                        thought, so maybe my wife should do it, as she's quite successful with advertising me when I'm
                        around. Maybe it's the perspective... Well, let's try that...
                    </div>
                    <div class="text">
                        Toby is working in IT for quite some time now (started in ~2010, professionally) though he's
                        always been surrounded by IT stuff from his early childhood on. Being fascinated with the
                        internals and the magic that made computers do what they do he's always tried to understand the
                        principle behind the things, still leaving him most of the time clueless about why it's working
                        the way it does. Enter the internetz. This funny invention gave his thirst for knowledge the
                        much needed saturation, explaining most of the things tiny Toby never could've made sense of by
                        himself!
                    </div>
                    <div class="text">
                        Few years in the future, Toby is now a coding guy, loving to solve the mysteries of bits and
                        bytes, always looking for new technologies or other neat things that he can dig into or read
                        more about. Most of the time he's working with PHP, JavaScript and CSS these days and frameworks
                        are a little hobby of his, although there's not always the need for them (quote: "Why isn't
                        there an ES6 framework out now!?"). He's also very handsome and people tensely like to listen to
                        his eloquent statements being fascinated about his intelligent yet humble personality with a
                        hint of...
                    </div>
                    <div class="text">
                        Ok, let's cut it here, wrong direction... Whoever feels the need to see what I am all about
                        can contact me via one of the buttons below or just send me an e-mail at the bottom of the page.
                        Looking forward to hear from you!
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-3 hidden-md-down"></div>
                <div class="col-12 col-md-9 p-md-2 p-3">
                    <div class="row">
                        <div class="col-3">
                            <a href="https://www.xing.com/profile/Tobias_Weichart"
                               class="text-dark m-0 fa-2x"
                               target="_blank">
                                <i class="fab fa-xing"></i>
                            </a>
                        </div>
                        <div class="col-3">
                            <a href="https://www.linkedin.com/in/tobias-weichart"
                               class="text-dark m-0 fa-2x"
                               target="_blank">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <div class="col-3">
                            <a href="https://twitter.com/tweichart"
                               class="text-dark m-0 fa-2x" target="_blank">
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                        <div class="col-3">
                            <a href="https://github.com/tweichart"
                               class="text-dark m-0 fa-2x" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row bg-light" id="focus">
        <div class="col-12 text-center p-5">
            <div class="row">
                <div class="col-12">
                    <h1>Focus</h1>
                </div>
            </div>
            <div class="row d-flex align-items-stretch">
                <div class="col-md-4 col-12 p-3">
                    <div class=" card">
                        <div class="card-body">
                            <i class="fas fa-pencil-alt text-dark card-title fa-8x"></i>
                            <h5 class="card-title">Planning</h5>
                            <p class="card-text text-justify">
                                I love planning and also talking about it, so before each project I like to work on a
                                good base to build the product on. Still all within reason, as it's also useful to
                                make some mistakes along the way, learn by them and don't make them the next time.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-12 p-3">
                    <div class=" card">
                        <div class="card-body">
                            <i class="fas fa-code text-dark card-title fa-8x"></i>
                            <h5 class="card-title">Developing</h5>
                            <p class="card-text text-justify">
                                The heart of each good project. Finding the balance between stable environments and the
                                most recent technologies is hard but exciting, as developing with speed is good but
                                learning new things is always a better motivation.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-12 p-3">
                    <div class=" card">
                        <div class="card-body">
                            <i class="fas fa-check text-dark card-title fa-8x"></i>
                            <h5 class="card-title">Quality Management</h5>
                            <p class="card-text text-justify">
                                Checking the results on a regular basis isn't always boring, a stable and easy
                                maintainable product brings way more joy to your every day life than you might think!
                                All of this done by a fully automated environment and you're good to go.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row" id="experience">
        <div class="col-12 text-center p-5">
            <div class="row">
                <div class="col-12">
                    <h1>Experience</h1>
                </div>
            </div>
            <div class="row timeline d-flex flex-column m-0">
                <div class="col-md-6 col-12">
                    <div class="card bg-light">
                        <div class="card-body">
                            <h5 class="card-title p-2">
                                Project Manager Frontend Technologies @
                                <a href="https://www.internetx.com/en/" class="text-dark" target="_blank">InterNetX
                                    GmbH</a>
                            </h5>
                            <h6 class="card-subtitle mb-2 text-muted">
                                Head of new Frontend Projects (March 2018 - present)
                            </h6>
                            <div class="card-text p-2 text-justify">
                                By the experience gained in the last years with modern web technologies I was assigned
                                to lead the development of the redesign of one of the biggest platforms the company has.
                                Still being responsible for the projects I've successfully supervised before, the
                                complete rewrite of a stable yet aged frontend was started. Using the modern
                                technologies stack I became familiar with over the last years (Laravel + Vue.js, Docker
                                + Kubernetes) this challenging new project was started and is progressing rapidly
                                towards a new experience for all - developer just like end user.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12">
                    <div class="card bg-light">
                        <div class="card-body">
                            <h5 class="card-title p-2">
                                Senior Software Engineer @
                                <a href="https://www.internetx.com/en/" class="text-dark" target="_blank">InterNetX
                                    GmbH</a>
                            </h5>
                            <h6 class="card-subtitle mb-2 text-muted">
                                Lead Frontend Dev 'Cloud & Automation' (Oct. 2015 - March 2018)
                            </h6>
                            <div class="card-text p-2 text-justify">
                                Based on the latest web technologies (e.g. Laravel, Vue.js) my focus was set on a stable
                                yet fully automated environment (Docker/Kubernetes + GitLab) with a good basis for
                                everybody on the team to work with. New technologies are always welcome as long as
                                everybody can learn them fast enough to get a real benefit out of it in a short time.
                                Apart from the frontend I've also created multiple APIs (NodeJS) for various projects
                                that don't fit the normal scheme.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12">
                    <div class="card bg-light">
                        <div class="card-body">
                            <h5 class="card-title p-2">
                                Senior Web Developer @
                                <a href="https://en.hallowelt.com/" class="text-dark" target="_blank">HalloWelt!
                                    GmbH</a>
                            </h5>
                            <h6 class="card-subtitle mb-2 text-muted">
                                Project Development, QA & Testing, Realease Management (Jul. 2013 - Sept. 2015)
                            </h6>
                            <div class="card-text p-2 text-justify">
                                The team developed a framework tailored to the needs of business customers based on the
                                famous MediaWiki software. One part of the job was working closely with the customers to
                                define and then implement their special needs for the software. The other part was the
                                development of the core framework always looking out for stability and good usability.
                                Planning and maintaining the releases was also my responsibility.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12">
                    <div class="card bg-light">
                        <div class="card-body">
                            <h5 class="card-title p-2">
                                Apprenticeship @
                                <a href="https://en.hallowelt.com/" class="text-dark" target="_blank">HalloWelt!
                                    GmbH</a>
                            </h5>
                            <h6 class="card-subtitle mb-2 text-muted">
                                Project Development (Aug. 2010 - Jul. 2013)
                            </h6>
                            <div class="card-text p-2 text-justify">
                                I've started to learn all about the handicraft of software development here. Having a
                                good basis is always important, so I've learned the most important things for a good and
                                long lasting project. Having all of the IT before me (from soft- to hardware to
                                networking) I could get a nice overview of the world of IT, always finding new ways
                                to learn and to build up the knowledge I now have.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12">
                    <div class="card bg-light">
                        <div class="card-body">
                            <h5 class="card-title p-2">
                                Husband @
                                <a href="https://tobias-weichart.de/" class="text-dark" target="_blank">Family
                                    Weichart</a>
                            </h5>
                            <h6 class="card-subtitle mb-2 text-muted">
                                Team Lead (May 2009 - present)
                            </h6>
                            <div class="card-text p-2 text-justify">
                                As the current Team Lead in this arrangement I'm always looking out for all the members
                                of the project (three, cat included) to be happy. This project taught me many things
                                about teamwork based on the ability of openly communicating all the things that are
                                going on. New technologies (e.g. bringFlowers.js, YouKnowWhereToFindItOnYourOwn-OS) are
                                always welcome and I've learned to adapt to them quite fast.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="row bg-light" id="contact">
        <div class="col-12 text-center p-5">
            <div class="row">
                <div class="col-12">
                    <h1>Contact</h1>
                </div>
            </div>
            <form action="/" method="post" class="text-left m-0" autocomplete="off">
                <div class="row">
                    <div class="col-12 col-md-3">
                        <div class="form-group bmd-form-group">
                            <label for="company" class="bmd-label-floating">Company</label>
                            <input type="text" class="form-control form-control-lg" id="company" name="company">
                        </div>
                    </div>
                    <div class="col-12 col-md-3">
                        <div class="form-group">
                            <label for="firstname" class="bmd-label-floating">Firstname <sup>*</sup></label>
                            <input type="text" class="form-control form-control-lg" id="firstname" name="firstname"
                                   required>
                        </div>
                    </div>
                    <div class="col-12 col-md-3">
                        <div class="form-group">
                            <label for="lastname" class="bmd-label-floating">Lastname <sup>*</sup></label>
                            <input type="text" class="form-control form-control-lg" id="lastname" name="lastname"
                                   required>
                        </div>
                    </div>
                    <div class="col-12 col-md-3">
                        <div class="form-group">
                            <label for="email" class="bmd-label-floating">E-Mail <sup>*</sup></label>
                            <input type="email" class="form-control form-control-lg" id="email" name="email" required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="message" class="bmd-label-floating">Message <sup>*</sup></label>
                            <textarea class="form-control form-control-lg" id="message" name="message" rows="5"
                                      required></textarea>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" required>
                                By using this form you agree with the
                                <a href="#" data-toggle="modal" data-target="#imprint-modal">privacy policy</a>
                                of this website.
                            </label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-3">
                        <input class="btn btn-block btn-primary btn-raised btn-lg m-t-3 mt-md-0" type="submit"
                               value="Submit">
                    </div>
                    <div class="col-12 col-md-9" style="display: none;">
                        <div class="alert mt-4 mt-md-0 mb-0" role="alert"></div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <footer class="row">
        <div class="col-12 d-flex align-items-center justify-content-center">
            <span>&copy; 2018 All rights reserved |
                <button type="button" class="btn btn-link p-0 m-0 text-capitalize" data-toggle="modal"
                        data-target="#imprint-modal">Imprint</button>
            </span>
        </div>
    </footer>
</main>
<div id="imprint-modal" tabindex="-1" role="dialog" class="modal fade" aria-labelledby="imprint-modal"
     aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Imprint</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <?php require_once('imprint.php') ?>
            </div>
        </div>
    </div>
</div>

<script src="/js/vendor.js"></script>
<script src="/js/app.js" defer></script>
</body>
</html>
