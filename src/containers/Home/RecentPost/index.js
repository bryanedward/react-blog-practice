import React from 'react'
import IndexCard from '../../../components/Ui/Card/Index'
import './Style.css'

const RecentPost = () => {
    return (
        <div style={{ width: "70%" }}>
            <IndexCard style={{ marginBottom: '20px' }}>
                <div className='postImageWrapper'>
                    <img src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <span>Featured</span>
                    <h2>Fitness Mantra To Live Fit Life</h2>
                    <span>posted onJuly 21, 2016 bySora Blogging Tips</span>
                    <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firm... Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six rapt...</p>

                    <button>Read More</button>

                </div>
            </IndexCard>
        </div>
    )
}

export default RecentPost