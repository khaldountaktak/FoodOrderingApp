import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg'
const Header = props => {
    return(
        <>
            <header className={classes.header}>
                <h1>FoodOrderingApp</h1>
                <HeaderCartButton/>
            </header>
        <div className={classes["main-image"]}>
            <img src={mealsImage} alt='Meals ' />
        </div>
        
        </>
    );
};

export default Header;