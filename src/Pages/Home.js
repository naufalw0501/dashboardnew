import React from 'react';
import css from './Home.module.css';
import BalanceStatisticBarChart from '../Components/BalanceStatisticBarChart';
import coin from '../Images/coin.png';
import debitcard from '../Images/debitcard.jpg';
import { IoMdMore } from "react-icons/io";
import { MdOutlineExpandMore } from "react-icons/md";
import { CgMore } from 'react-icons/cg';

const checklistData = ["Macbook", "Bicycle", "Motorcycle", "Iphone 14 Pro Max"]

const Home = () => {
    return (
        <div className={css.layout}>
            <div className={css.container1}>
                <div className={css.subcontainer11}>
                    <div className={css.title}>Hello, John D</div>
                    <div className={css.subtitle}>View and controls your finance here!</div>
                </div>
                <div className={css.subcontainer12}>
                    <div className={css.balancestatistic}>
                        <div style={{ flex: "30%", paddingLeft: "0.4vw" }}>
                            <div style={{ fontWeight: "700", }}>Balance Statistic</div>
                            <div style={{ fontWeight: "700", fontSize: "2vw" }}>$564</div>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div style={{ paddingLeft: "0.4vw" }}>
                                    <img src={coin} style={{ height: "2vw", width: "2vw" }} />
                                </div>
                                <div style={{ fontWeight: "400", fontSize: "0.9vw", paddingLeft: "0.4vw" }}>Your Total Balance</div>
                            </div>
                            <div style={{ height: "5vh", width: "100%", border: "1px solid green" }}>&nbsp;</div>
                            <div style={{ fontWeight: "400", fontSize: "0.8vw" }}>Always See Your Earnings Updates</div>
                        </div>
                        <div style={{ flex: "70%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                            <div style={{ alignSelf: "flex-end", backgroundColor: "#F7F6FE", padding: "5px", borderRadius: "7px" }}>Filter <MdOutlineExpandMore /></div>
                            <div style={{ height: "19vh", width: "100%", border: "1px solid green" }}>&nbsp;</div>
                            {/* <div>
                                <BalanceStatisticBarChart/>
                            </div> */}
                        </div>
                    </div>
                    <div className={css.debitcard} style={{
                        backgroundImage: `url(${debitcard})`,
                        backgroundSize: '80%',
                        backgroundPosition: 'center',
                    }}>
                        <div style={{ position: "absolute", top: "10px", left: "10px" }}>S.</div>
                        <div style={{ position: "absolute", top: "10px", right: "10px" }}>Visa</div>
                        <div style={{ position: "absolute", bottom: "28px", left: "10px" }}>****9838</div>
                        <div style={{ position: "absolute", bottom: "10px", left: "10px" }}>Jhon Demon</div>
                        <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>08/12</div>
                    </div>
                </div>
                <div className={css.subcontainer13}>
                    <div style={{ flex: "55%", display: "flex", flexDirection: "column", padding: "0vw 1vw 0vw 1vw", borderRight: "1px solid gray" }}>
                        <div style={{ fontSize: "1.0vw", fontWeight: "600" }}>List of items to buy</div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div>
                                <div style={{ fontSize: "1.5vw", fontWeight: "600" }}>02 : 00</div>
                                <div style={{ fontSize: "0.9vw", color: "gray" }}>Sat, August 12</div>
                            </div>
                            <div style={{ padding: "auto", fontSize: "1.5vw" }}>{'>'}</div>
                            <div>
                                <div style={{ fontSize: "1.5vw", fontWeight: "600" }}>05 : 00</div>
                                <div style={{ fontSize: "0.9vw", color: "gray" }}>Sat, August 12</div>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <div style={{ fontWeight: "500" }}><span style={{ color: "gray" }}>0/3</span> Shopping List</div>
                            <div>+ Add an item</div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", }}>
                            {checklistData.map((item, index) => (
                                <div key={index} style={{ flex: "40%", display: "flex", flexDirection: "row", backgroundColor: "#F7F6FE", justifyContent: "space-between", margin: "0.5vw 1vw 0.5vw 1vw", borderRadius: "5px" }}>
                                    <input type="checkbox" id={`Check${index}`} />
                                    <label htmlFor={`Check${index}`}>{item}</label>
                                    <div style={{ transform: 'rotate(90deg)' }}><CgMore /></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ flex: "45%", display: "flex", flexDirection: "column", padding: "0vw 1vw 0vw 1vw", }}>
                        <div>Esther Howard</div>
                        <div>List of items to buy</div>
                    </div>
                </div>
                <div className={css.subcontainer14}>
                    <div className={css.transaction}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div style={{ flex: "60%" }}>Last Transaction</div>
                            <div style={{ flex: "20%" }}>Newest</div>
                            <div style={{ flex: "20%" }}>Oldest</div>
                        </div>
                    </div>
                    <div className={css.analytics}>
                        <div style={{ position: "absolute", top: "5px", left: "5px" }}>S.</div>
                        <div style={{ position: "absolute", top: "5px", right: "5px" }}>Visa</div>
                        <div style={{ position: "absolute", bottom: "5px", left: "5px" }}>Jhon Demon</div>
                        <div style={{ position: "absolute", bottom: "5px", right: "5px" }}>08/12</div>
                    </div>
                </div>
            </div>
            <div className={css.container2}>
                <div className={css.subcontainer21}>
                    <div>
                        Expenses and Income
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div> Expense </div>
                            <div> 75% </div>
                            <div> 5.653 </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div> VS </div>
                            {/* <div> 40% </div>
                           <div> 2.656 </div> */}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <div> Income </div>
                            <div> 40% </div>
                            <div> 2.656 </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", border: "1px solid red", borderRadius: "1vw", overflow: "hidden" }}>
                        <div style={{ backgroundColor: "blue", flex: "75%" }}>&nbsp;</div>
                        <div style={{ backgroundColor: "red", flex: "25%" }}>&nbsp;</div>
                    </div>
                </div>
                <div className={css.subcontainer22}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div>
                            Latest Spending
                        </div>
                        <IoMdMore />
                    </div>
                </div>
                <div className={css.subcontainer23}>
                    <div>
                        Go To Premium
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
