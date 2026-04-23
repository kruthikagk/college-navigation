/**
 * DATA ENGINE
 * All data extracted from your Layout Image
 */
const CAMPUS_DATA = [
    {
        id: "01",
        name: "Netaji Subhas Chandra Bose Block",
        floors: [
            { f: "Ground", d: "Dept. of AI and Machine Learning" },
            { f: "1st Floor", d: "Dept. of Computer Science & Engineering - 1" },
            { f: "2nd Floor", d: "Dept. of Computer Science & Engineering - 2" },
            { f: "3rd Floor", d: "Dept. of Management Studies" }
        ]
    },
    {
        id: "02",
        name: "Chhatrapati Shivaji Block",
        floors: [
            { f: "Lower", d: "AICTE IDEA Lab, Dance Studios" },
            { f: "Ground", d: "Reception, Admissions, HR, Accounts" },
            { f: "1st Floor", d: "Career Development Centre" },
            { f: "2nd Floor", d: "Dept. of CSE (Data Science)" },
            { f: "3rd & 4th", d: "Dept. of Applied Sciences" },
            { f: "5th Floor", d: "Dept. of Information Science" }
        ]
    },
    {
        id: "08",
        name: "Sardar Vallabhbhai Patel Block",
        floors: [
            { f: "Ground", d: "Centre of Excellence, Tejas Hall" },
            { f: "1st Floor", d: "Mechanical & Electronics Engineering" },
            { f: "2nd Floor", d: "Electrical & Electronics Engineering" },
            { f: "3rd Floor", d: "Dept. of MCA" }
        ]
    }
];

class NavigatorApp {
    constructor() {
        this.directory = document.getElementById('directory');
        this.drawer = document.getElementById('detailDrawer');
        this.drawerContent = document.getElementById('drawerContent');
        this.searchInput = document.getElementById('mainSearch');
        
        this.init();
    }

    init() {
        this.renderDirectory(CAMPUS_DATA);
        this.setupEvents();
    }

    renderDirectory(data) {
        this.directory.innerHTML = '';
        data.forEach(block => {
            const card = document.createElement('div');
            card.className = 'block-card';
            card.innerHTML = `
                <h4>${block.id}. ${block.name}</h4>
                <p>${block.floors.length} Floors • Academic</p>
            `;
            card.onclick = () => this.openDetails(block);
            this.directory.appendChild(card);
        });
    }

    openDetails(block) {
        this.drawerContent.innerHTML = `
            <h2 style="color:var(--primary); margin-bottom:10px;">${block.name}</h2>
            <span class="chip active">Block ID: ${block.id}</span>
            <hr style="margin:20px 0; border:0; border-top:1px solid #eee;">
            <div class="floor-list">
                ${block.floors.map(item => `
                    <div style="margin-bottom:15px;">
                        <strong style="color:var(--accent); font-size:0.8rem; display:block;">${item.f}</strong>
                        <span style="font-size:0.95rem;">${item.d}</span>
                    </div>
                `).join('')}
            </div>
        `;
        this.drawer.classList.add('active');
    }

    setupEvents() {
        // Close Drawer
        document.getElementById('closeDrawer').onclick = () => {
            this.drawer.classList.remove('active');
        };

        // Live Search
        this.searchInput.oninput = (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = CAMPUS_DATA.filter(b => 
                b.name.toLowerCase().includes(query) || 
                b.floors.some(f => f.d.toLowerCase().includes(query))
            );
            this.renderDirectory(filtered);
        };
    }
}

// Start App
window.onload = () => new NavigatorApp();
