function openService(service){

    let section = document.getElementById("service-details");
    section.style.display = "block";

    let title = document.getElementById("service-title");
    let text = document.getElementById("service-text");
    let images = document.getElementById("service-images");

    if(service === "web"){
        title.innerHTML = "Website Development";
        text.innerHTML = `
        <ul>
            <li>Modern and professional website design</li>
            <li>Responsive (Mobile + Desktop)</li>
            <li>UI/UX Design</li>
            <li>Frontend & Backend Development</li>
            <li>SEO-friendly structure</li>
            <li>High security and performance</li>
        </ul>`;

        images.innerHTML = `
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085">
        `;
    }

    if(service === "marketing"){
        title.innerHTML = "Digital Marketing";
        text.innerHTML = `
        <ul>
            <li>Social Media Marketing</li>
            <li>Search Engine Optimization (SEO)</li>
            <li>Online Advertising</li>
            <li>Brand promotion strategies</li>
            <li>Customer engagement growth</li>
        </ul>`;

        images.innerHTML = `
        <img src="https://images.unsplash.com/photo-1557838923-2985c318be48">
        `;
    }

    if(service === "photo"){
        title.innerHTML = "Photography";
        text.innerHTML = `
        <ul>
            <li>Fashion photography</li>
            <li>Product photography</li>
            <li>Corporate shoots</li>
            <li>High-quality images</li>
            <li>Social media ready content</li>
        </ul>`;

        images.innerHTML = `
        <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7">
        `;
    }

    if(service === "catalogue"){
        title.innerHTML = "Catalogue Design";
        text.innerHTML = `
        <ul>
            <li>Creative product catalogues</li>
            <li>Print & digital formats</li>
            <li>Professional layouts</li>
            <li>Brand-focused design</li>
            <li>Improves sales presentation</li>
        </ul>`;

        images.innerHTML = `
        <img src="/static/catalogue.png">

        `;
    }

    if(service === "event"){
        title.innerHTML = "Event Organization";
        text.innerHTML = `
        <ul>
            <li>Corporate events</li>
            <li>Product launches</li>
            <li>Exhibitions</li>
            <li>Full event management</li>
            <li>Professional execution</li>
        </ul>`;

        images.innerHTML = `
        <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678">
        `;
    }
}