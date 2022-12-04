import KeyWhite from "./components/Keys/KeyWhite";
import styles from "./App.module.css";
import KeyBlack from "./components/Keys/KeyBlack";
import key1 from './assets/key01.mp3';
import key2 from './assets/key02.mp3';
import key3 from './assets/key03.mp3';
import key4 from './assets/key04.mp3';
import key5 from './assets/key05.mp3';
import key6 from './assets/key06.mp3';
import key7 from './assets/key07.mp3';
import key8 from './assets/key08.mp3';
import key9 from './assets/key09.mp3';
import key10 from './assets/key10.mp3';
import key11 from './assets/key11.mp3';
import key12 from './assets/key12.mp3';
import key13 from './assets/key13.mp3';
import key14 from './assets/key14.mp3';
import key15 from './assets/key15.mp3';
import key16 from './assets/key16.mp3';
import key17 from './assets/key17.mp3';
import key18 from './assets/key18.mp3';
import key19 from './assets/key19.mp3';
import key20 from './assets/key20.mp3';
import key21 from './assets/key21.mp3';
import key22 from './assets/key22.mp3';
import key23 from './assets/key23.mp3';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.blackContainer}>
        <KeyBlack sound={key2} dProp="M0.763632 1.15646L95.9642 0.00531389L104.478 334.026L28.718 334.943L0.763632 1.15646Z"></KeyBlack>
        <KeyBlack sound={key4} dProp="M89.1145 0.758435L0.137954 3.38306L2.15158 337.41L72.9584 335.321L89.1145 0.758435Z"></KeyBlack>
        <KeyBlack dProp=""></KeyBlack>
        <KeyBlack sound={key7} dProp="M7.32825 0.650887L64.8094 9.17822L46.3525 342.314L0.609471 335.529L7.32825 0.650887Z"></KeyBlack>
        <KeyBlack sound={key9} dProp="M0.577909 0.0310959L78.9777 1.90849L85.266 335.732L22.8761 334.238L0.577909 0.0310959Z"></KeyBlack>
        <KeyBlack sound={key11} dProp="M89.3699 0.605145L0.393326 3.22977L2.40695 337.257L73.2137 335.168L89.3699 0.605145Z"></KeyBlack>
        <KeyBlack dProp=""></KeyBlack>
        <KeyBlack sound={key14} dProp="M0.860112 0.496733L70.0414 4.69721L70.5937 338.465L15.5398 335.122L0.860112 0.496733Z"></KeyBlack>
        <KeyBlack sound={key16} dProp="M80.5071 371.717L0.501794 363.326L19.5456 0.380182L83.2132 7.05798L80.5071 371.717Z"></KeyBlack>
        <KeyBlack dProp=""></KeyBlack>
        <KeyBlack sound={key19} dProp="M81.9912 366.611L9.18404 363.402L0.49403 0.151517L58.4333 2.70475L81.9912 366.611Z"></KeyBlack>
        <KeyBlack sound={key21} dProp="M72.6693 371.33L0.153525 364.075L11.6894 0.903774L69.3969 6.67697L72.6693 371.33Z"></KeyBlack>
        <KeyBlack sound={key23} dProp="M85.3533 365.637L12.8375 358.382L0.682014 17.1812L82.0808 0.983613L85.3533 365.637Z"></KeyBlack>
      </div>
      <div className={styles.whiteContainer}>
        <KeyWhite
          dProp={
            "M5.78161e-05 19.138L115.805 0.727254L127.136 562.002L29.0897 562.002L5.78161e-05 19.138Z"
          }
          sound={key1}
        ></KeyWhite>
        <KeyWhite
          dProp={
            "M0.270964 31.2627L133.451 0.331865L150.4 562.467L45.4276 562.467L0.270964 31.2627Z"
          }
          sound={key3}
        ></KeyWhite>
        <KeyWhite
          dProp={
            "M0.634499 0.00709696L118.692 12.0089L109.881 574.33L26.6025 578.275L0.634499 0.00709696Z"
          }
          sound={key5}
        ></KeyWhite>
        <KeyWhite
          dProp={
            "M0.379276 19.3103L135.859 0.899499L100.455 562.175L17.0825 562.175L0.379276 19.3103Z"
          }
          sound={key6}
        ></KeyWhite>
        <KeyWhite
          dProp={
            "M139.096 562.175L0.741119 562.175L56.562 0.899589L152.046 0.899597L139.096 562.175Z"
          }
          sound={key8}
        ></KeyWhite>
        <KeyWhite
          dProp={
            "M135.848 543.764L0.369217 562.175L35.7732 0.899588L119.145 0.899596L135.848 543.764Z"
          }
          sound={key10}
        ></KeyWhite>
        <KeyWhite
          dProp={
            "M0.244605 18.8785L135.724 0.467651L100.32 561.743H16.9479L0.244605 18.8785Z"
          }
          sound={key12}
        ></KeyWhite>
        <KeyWhite
          dProp={
            "M12.9968 0.467663L151.352 0.467651L95.5311 561.743H0.0472412L12.9968 0.467663Z"
          }
          sound={key13}
        ></KeyWhite>
        <KeyWhite
          dProp={
            "M135.714 543.332L0.234634 561.743L35.6386 0.467643L119.011 0.46765L135.714 543.332Z"
          }
          sound={key15}
        ></KeyWhite>
        <KeyWhite
          dProp={
            "M118.459 578.635L0.401498 566.633L9.21186 4.3119L92.4906 0.367577L118.459 578.635Z"
          }
          sound={key17}
        ></KeyWhite>
        <KeyWhite
          dProp={
            "M150.822 531.379L17.6424 562.31L0.693026 0.175315L105.666 0.174977L150.822 531.379Z"
          }
          sound={key18}
        ></KeyWhite>
        <KeyWhite
          dProp={
            "M128.093 543.504L12.2882 561.915L0.957324 0.639881L99.0033 0.63989L128.093 543.504Z"
          }
          sound={key20}
        ></KeyWhite>
        <KeyWhite
          dProp={
            "M0.0929937 19.0507L135.572 0.639893L100.168 561.915H16.7963L0.0929937 19.0507Z"
          }
          sound={key22}
        ></KeyWhite>
      </div>
    </div>
  );
}

export default App;
