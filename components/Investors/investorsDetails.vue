<template>
    <section id="about" class="about-area p-5">
        <div class="container">
            <div class="row align-items-center gy-5">
                <div class="col-12">
                    <div class="">
                        <div class="site-heading mb-3">
                            <span class="site-title-tagline">Investor</span>
                            <h2 class="site-title">Our
                               <span> Investor </span>Details</h2>
                            <p class="text-muted">
                                Below is the list of all registered investors and their shareholdings.
                                Each card contains key details such as investor name, contact info, and number of shares
                                owned.
                                This section helps maintain transparent records of equity stakeholders.
                            </p>
                        </div>

                        <div class="row">
                            <!-- Investor Card 1 -->
                            <div class="col-md-6 col-lg-6">
                                <div class="portfolio-sidebar">
                                    <div class="widget portfolio-sidebar-content">
                                        <h4 class="portfolio-sidebar-title">Investor Details</h4>
                                        <ul>
                                            <li>Investor Name <span>Rajesh Kumar</span></li>
                                            <li>ID <span>INV101</span></li>
                                            <li>Email <span>rajesh.kumar@maxearth.in</span></li>
                                            <li>Phone <span>+91 98765 43210</span></li>
                                            <li>Shares <span>12,000</span></li>
                                            <li>Address <span>Sector 21, Noida, Uttar Pradesh</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <!-- Investor Card 2 -->
                            <div class="col-md-6 col-lg-6">
                                <div class="portfolio-sidebar">
                                    <div class="widget portfolio-sidebar-content">
                                        <h4 class="portfolio-sidebar-title">Investor Details</h4>
                                        <ul>
                                            <li>Investor Name <span>Priya Mehta</span></li>
                                            <li>ID <span>INV102</span></li>
                                            <li>Email <span>priya.mehta@maxearth.in</span></li>
                                            <li>Phone <span>+91 98234 56789</span></li>
                                            <li>Shares <span>8,500</span></li>
                                            <li>Address <span>Vasant Kunj, New Delhi</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <!-- Investor Card 3 -->
                            <div class="col-md-6 col-lg-6">
                                <div class="portfolio-sidebar">
                                    <div class="widget portfolio-sidebar-content">
                                        <h4 class="portfolio-sidebar-title">Investor Details</h4>
                                        <ul>
                                            <li>Investor Name <span>Arun Nair</span></li>
                                            <li>ID <span>INV103</span></li>
                                            <li>Email <span>arun.nair@maxearth.in</span></li>
                                            <li>Phone <span>+91 97531 24680</span></li>
                                            <li>Shares <span>5,300</span></li>
                                            <li>Address <span>Kadavanthra, Kochi, Kerala</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <!-- Investor Card 4 -->
                            <div class="col-md-6 col-lg-6">
                                <div class="portfolio-sidebar">
                                    <div class="widget portfolio-sidebar-content">
                                        <h4 class="portfolio-sidebar-title">Investor Details</h4>
                                        <ul>
                                            <li>Investor Name <span>Anjali Deshmukh</span></li>
                                            <li>ID <span>INV104</span></li>
                                            <li>Email <span>anjali.d@maxearth.in</span></li>
                                            <li>Phone <span>+91 96123 78945</span></li>
                                            <li>Shares <span>4,750</span></li>
                                            <li>Address <span>Baner, Pune, Maharashtra</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <!-- Add more investor cards as needed -->
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
<script setup>
</script>
<style scoped>
.portfolio-sidebar {
    border-radius: 6px;
    padding: 20px;
    background-color: #f8f9fa;
    margin-bottom: 30px;
}

.portfolio-sidebar-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
    border-bottom: 2px solid var(--theme-color);
    padding-bottom: 5px;
}

.portfolio-sidebar-content ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
}

.portfolio-sidebar-content ul li {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #eaeaea;
    font-size: 15px;
}

.portfolio-sidebar-content ul li span {
    font-weight: 500;
    color: #333;
}
</style>