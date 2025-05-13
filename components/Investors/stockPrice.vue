<template>
    <section id="stock-price" class="about-area p-5">
        <div class="container">
            <div class="mb-5">
                <div class="site-heading mb-3">
                    <span class="site-title-tagline">Stock Price</span>
                    <h2 class="site-title">Maxearth Resources Ltd.
                        <span>Stock Price</span> Information
                    </h2>
                    <p class="text-muted">
                        Stay informed about the latest stock price trends for Maxearth Resources Ltd. Below you will
                        find
                        live stock details, historical data,
                        and an interactive price chart. Click on the options to explore in-depth market analysis and
                        trends.
                    </p>
                </div>
            </div>
            <!-- Stock Price Details Card -->
            <div class="row gy-4">
                <!-- Stock Details Section -->
                <div class="col-md-6 col-sm-12 d-flex">
                    <div class="portfolio-sidebar w-100 d-flex flex-column">
                        <div class="widget portfolio-sidebar-content flex-fill">
                            <h4 class="portfolio-sidebar-title">Maxearth Resources Ltd.</h4>
                            <ul>
                                <li><strong>Symbol</strong> <span>MAXE</span></li>
                                <li><strong>Exchange</strong> <span>BSE</span></li>
                                <li><strong>Last Price</strong> <span>₹248.75</span></li>
                                <li><strong>Day Change</strong> <span class="text-success">+3.10 (1.26%)</span></li>
                                <li><strong>Market Cap</strong> <span>₹3,540 Cr</span></li>
                                <li><strong>52 Week High/Low</strong> <span>₹280.50 / ₹200.10</span></li>
                                <li><strong>PE Ratio</strong> <span>25.34</span></li>
                            </ul>
                            <a href="#" class="theme-btn mt-3 download-btn">Visit Website</a>
                        </div>
                    </div>
                </div>

                <!-- Stock Price Chart Section -->
                <div class="col-md-6 col-sm-12 d-flex">
                    <div class="portfolio-sidebar w-100 d-flex flex-column">
                        <div class="widget portfolio-sidebar-content flex-fill">
                            <h4 class="portfolio-sidebar-title">Stock Price Trend</h4>
                            <div class="chart-placeholder flex-fill">
                                <canvas id="stockPriceChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="mb-5">
                    <h2 class="site-heading mb-3">Recent Stock Data (Last 5 Days)</h2>
                    <p class="text-muted">
                        Here are the most recent stock data for the last 5 days.
                        You can see details such as open, close, high, low prices, and volume.
                    </p>
                </div>
                <!-- Stock Data Card for 06 May 2025 -->
                <div class="col-md-6">

                    <div class="portfolio-sidebar">
                        <div class="widget portfolio-sidebar-content">
                            <h5 class="portfolio-sidebar-title">06 May 2025</h5>
                            <ul class="list-unstyled">
                                <li><strong>Open:</strong> ₹245.00</li>
                                <li><strong>Close:</strong> ₹248.75</li>
                                <li><strong>High:</strong> ₹250.00</li>
                                <li><strong>Low:</strong> ₹240.50</li>
                                <li><strong>Volume:</strong> 1,200,000</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Stock Data Card for 05 May 2025 -->
                <div class="col-md-6">
                    <div class="portfolio-sidebar">
                        <div class="widget portfolio-sidebar-content">
                            <h5 class="portfolio-sidebar-title">06 May 2025</h5>
                            <ul class="list-unstyled">
                                <li><strong>Open:</strong> ₹240.00</li>
                                <li><strong>Close:</strong> ₹245.00</li>
                                <li><strong>High:</strong> ₹248.00</li>
                                <li><strong>Low:</strong> ₹238.50</li>
                                <li><strong>Volume:</strong> 900,000</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Stock Data Card for 04 May 2025 -->
                <div class="col-md-6">
                    <div class="portfolio-sidebar">
                        <div class="widget portfolio-sidebar-content">
                            <h5 class="portfolio-sidebar-title">06 May 2025</h5>
                            <ul class="list-unstyled">
                                <li><strong>Open:</strong> ₹238.50</li>
                                <li><strong>Close:</strong> ₹240.00</li>
                                <li><strong>High:</strong> ₹242.50</li>
                                <li><strong>Low:</strong> ₹235.00</li>
                                <li><strong>Volume:</strong> 850,000</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Stock Data Card for 03 May 2025 -->
                <div class="col-md-6">
                    <div class="portfolio-sidebar">
                        <div class="widget portfolio-sidebar-content">
                            <h5 class="portfolio-sidebar-title">06 May 2025</h5>
                            <ul class="list-unstyled">
                                <li><strong>Open:</strong> ₹235.00</li>
                                <li><strong>Close:</strong> ₹238.50</li>
                                <li><strong>High:</strong> ₹240.50</li>
                                <li><strong>Low:</strong> ₹230.00</li>
                                <li><strong>Volume:</strong> 950,000</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Stock Data Card for 02 May 2025 -->
                <div class="col-md-6">
                    <div class="portfolio-sidebar">
                        <div class="widget portfolio-sidebar-content">
                            <h5 class="portfolio-sidebar-title">06 May 2025</h5>
                            <ul class="list-unstyled">
                                <li><strong>Open:</strong> ₹230.00</li>
                                <li><strong>Close:</strong> ₹235.00</li>
                                <li><strong>High:</strong> ₹237.00</li>
                                <li><strong>Low:</strong> ₹225.50</li>
                                <li><strong>Volume:</strong> 1,100,000</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Stock Data Card for 03 May 2025 -->
                <div class="col-md-6">
                    <div class="portfolio-sidebar">
                        <div class="widget portfolio-sidebar-content">
                            <h5 class="portfolio-sidebar-title">01 May 2025</h5>
                            <ul class="list-unstyled">
                                <li><strong>Open:</strong> ₹235.00</li>
                                <li><strong>Close:</strong> ₹238.50</li>
                                <li><strong>High:</strong> ₹240.50</li>
                                <li><strong>Low:</strong> ₹230.00</li>
                                <li><strong>Volume:</strong> 950,000</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> <!-- End of Row -->

            <!-- Latest News Section -->
            <div class="row mt-5">
                <div class="col-12">
                    <div class="portfolio-sidebar">
                        <div class="widget portfolio-sidebar-content">
                            <h4 class="portfolio-sidebar-title">Latest News</h4>
                            <ul class="list-unstyled">
                                <!-- /news/stock-news-1 -->
                                <li><a href="">Maxearth Resources Q1 Results: Strong
                                        Performance and Growth</a></li>
                                <li><a href="">Maxearth Stock Surges as CEO Announces
                                        Expansion Plans</a></li>
                                <li><a href="">Maxearth Resources Wins Industry Award
                                        for Innovation</a></li>
                                <li><a href="">Maxearth Resources Ltd. Announced New
                                        Strategic Partnerships</a></li>
                            </ul>
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
/* Scoped Styles for the Stock Price Page */
.portfolio-sidebar {
    padding: 20px;
    background-color: #f8f9fa;
    margin-bottom: 30px;
    transition: box-shadow 0.3s ease;
}

.portfolio-sidebar-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
    border-bottom: 2px solid var(--theme-color, #007bff);
    padding-bottom: 5px;
}

.portfolio-sidebar-content ul {
    list-style: none;
    padding-left: 0;
    margin: 0 0 15px 0;
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

.chart-placeholder {
    width: 100%;
    height: 250px;
    background-color: #eaeaea;
}

.table th,
.table td {
    vertical-align: middle;
}

.table-striped tbody tr:nth-child(odd) {
    background-color: #f9f9f9;
}

/* Responsive Design */
@media (max-width: 768px) {
    .portfolio-sidebar {
        padding: 15px;
    }

    .table-responsive {
        overflow-x: auto;
    }
}

@media (max-width: 576px) {
    .portfolio-sidebar-title {
        font-size: 18px;
    }
}
</style>