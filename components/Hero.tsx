import Link from "next/link";
export default function Hero() {
  return (
    <section className=" text-gray-100 min-h-screen  ">
      <div className="absolute w-full overflow-hidden ">
        <div className="inline-block w-full transform  mt-[-60px] opacity-5">
          <svg
            width="100%"
            height="799"
            viewBox="0 0 1512 799"
            fill="#000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_8_6)">
              <path
                d="M232.659 726.279C228.711 731.732 223.689 736.964 217.595 741.978C211.817 746.908 204.438 750.914 195.46 753.995C193.021 754.987 190.382 755.863 187.543 756.623C184.704 757.384 182.023 758.103 179.5 758.779C154.265 765.54 130.433 766.179 108.003 760.694C85.9728 755.441 66.4371 743.095 49.3966 723.658C32.6715 704.137 19.5331 676.553 9.98269 640.911C-2.01897 596.12 -2.75721 559.299 7.76798 530.447C18.6087 501.51 39.2622 481.439 69.7289 470.233C70.9906 469.895 72.0946 469.599 73.0408 469.345C74.2181 468.692 75.4374 468.196 76.6992 467.858C85.5313 465.491 93.3551 464.409 100.171 464.611C106.986 464.814 113.129 465.027 118.598 465.252L90.4536 360.215L165.801 332.926L219.454 343.905L315.932 703.966L245.062 729.04L232.659 726.279ZM96.326 363.205L128.02 481.49L126.728 482.344C122.829 476.627 116.588 472.89 108.004 471.134C99.3345 469.061 89.3224 469.547 77.967 472.589C77.0207 472.843 75.959 473.296 74.7818 473.95C73.8355 474.204 72.7316 474.499 71.4698 474.837C42.2649 485.705 22.6308 505.166 12.5673 533.218C2.41944 560.954 3.13508 596.429 14.7141 639.643C25.8706 681.279 41.8082 710.478 62.5269 727.24C83.4764 743.6 106.884 748.316 132.749 741.386C134.326 740.963 135.745 740.583 137.007 740.245C138.584 739.822 139.962 739.285 141.139 738.631C155.541 733.082 166.302 725.296 173.421 715.274C180.455 704.937 184.555 694.374 185.72 683.581L187.266 683.673L194.873 712.062L256.406 689.996L162.464 339.398L96.326 363.205ZM136.706 672.88C126.612 675.584 116.543 672.704 106.499 664.239C96.686 655.373 88.5683 638.956 82.1446 614.982C75.7212 591.01 74.3847 572.774 78.135 560.275C81.8854 547.775 90.3732 539.078 103.599 534.181L107.857 533.04C116.058 530.843 123.547 531.034 130.323 533.613C137.1 536.192 142.164 540.583 145.516 546.784L163.011 612.077C166.815 626.272 166.472 638.873 161.984 649.879C157.81 660.801 150.331 668.215 139.545 672.119L136.706 672.88ZM143.827 559.407C137.141 562.213 133.447 568.612 132.743 578.605C132.356 588.513 134.951 603.876 140.529 624.694C142.304 631.318 144.152 637.583 146.073 643.493C147.91 649.086 150.124 653.564 152.716 656.926C161.073 645.22 162.928 630.695 158.28 613.345L143.827 559.407ZM600.344 549.155C598.927 577.933 592.056 602.762 579.735 623.645C567.727 644.443 547.868 659.906 520.155 670.036C516.771 671.281 513.342 672.368 509.873 673.298C506.803 674.46 503.533 675.504 500.064 676.433C472.622 683.787 446.34 684.743 421.217 679.304C396.494 674.097 374.665 662.027 355.733 643.097C336.8 624.168 322.895 598.142 314.021 565.022C306.245 536.003 304.414 509.617 308.531 485.862C312.961 462.024 322.088 441.83 335.909 425.28C349.962 408.329 367.773 395.95 389.347 388.141C391.471 387.234 393.635 386.485 395.844 385.893C398.367 385.217 400.732 384.583 402.941 383.991C420.604 379.259 438.799 377.764 457.522 379.509C476.478 380.853 494.627 386.132 511.97 395.346C529.629 404.475 545.307 418.192 559.001 436.498C572.927 454.403 583.693 477.55 591.3 505.939C591.976 508.461 592.695 511.143 593.455 513.982C594.131 516.505 594.651 519.072 595.011 521.679L546.472 539.249L600.344 549.155ZM478.921 542.643C478.956 554.129 476.118 564.354 470.407 573.323C464.696 582.291 456.016 589.01 444.368 593.484L440.583 594.499C429.858 597.373 419.971 595.797 410.918 589.77C401.865 583.743 395.48 573.79 391.761 559.912L535.485 507.709C534.956 504.47 534.31 501.432 533.55 498.593C532.704 495.439 531.901 492.442 531.141 489.603C520.491 449.859 503.692 421.23 480.743 403.714C457.793 386.198 431.335 381.454 401.37 389.484C399.794 389.906 398.058 390.371 396.166 390.878C394.589 391.3 392.896 391.923 391.088 392.746C370.376 399.986 353.267 411.839 339.762 428.304C326.173 444.454 317.392 464.049 313.423 487.087C309.454 510.125 311.23 535.681 318.752 563.754C329.655 604.444 346.958 632.432 370.663 647.717C394.368 663.003 421.359 666.588 451.64 658.475C453.849 657.883 456.055 657.292 458.264 656.7C460.473 656.108 462.637 655.36 464.762 654.452C491.296 644.975 510.38 630.397 522.009 610.714C533.954 590.947 540.311 568.623 541.082 543.736L478.921 542.643ZM379.928 506.286C377.139 495.877 378.358 485.915 383.584 476.401C388.809 466.887 396.974 460.136 408.076 456.147L412.334 455.006C421.797 452.47 430.285 453.239 437.8 457.31C445.545 460.982 450.897 468.338 453.855 479.378L379.928 506.286ZM440.312 578.344C440.734 579.92 441.787 581.33 443.472 582.568C445.471 583.722 447.472 584.878 449.471 586.032C454.726 582.934 458.635 579.859 461.198 576.804C463.761 573.75 465.849 570.826 467.466 568.025L440.312 578.344ZM703.076 588.06L550.211 358.223L628.271 329.7L681.924 340.679L708.289 382.297L711.256 304.421L784.711 277.64L838.364 288.619L821.448 575.613L756.729 599.039L703.076 588.06ZM716.309 308.139L710.222 469.002L625.88 335.919L557.976 360.706L704.647 582.568L763.342 561.263L779.608 285.092L716.309 308.139ZM915.943 540.151L891.094 447.415L974.232 417.025L1027.88 428.004L1052.86 521.213L969.596 551.13L915.943 540.151ZM896.967 450.405L919.28 533.678L993.334 507.243L970.895 423.497L896.967 450.405ZM1244.68 458.658C1242.06 462.743 1237.34 467.218 1230.53 472.085C1224.03 476.868 1216.61 480.717 1208.27 483.629C1206.77 484.367 1205.08 484.989 1203.19 485.497C1201.29 486.004 1199.56 486.469 1197.98 486.891C1185.36 490.272 1171.97 492.001 1157.79 492.082C1144.01 492.392 1130.63 490.4 1117.65 486.104C1104.75 482.121 1093.31 475.384 1083.33 465.888C1073.57 455.991 1066.54 443.001 1062.23 426.914L1010.38 233.399L1085.73 206.11L1133.89 215.518L1176.11 373.074C1177.26 371.076 1178.43 369.749 1179.6 369.095C1181.01 368.042 1182.05 366.242 1182.72 363.695L1136.83 192.418L1211.7 165.256L1265.35 176.236L1335.08 436.463L1263.87 462.138L1244.68 458.658ZM1142.7 195.409L1187.71 363.374C1186.16 370.213 1183.21 376.243 1178.86 381.464C1174.74 386.286 1168.4 390.353 1159.82 393.666L1157.45 394.3C1150.83 396.075 1144.4 395.43 1138.17 392.367C1132.26 389.22 1127.86 382.283 1124.99 371.558L1082.39 212.583L1016.25 236.389L1066.97 425.646C1072.8 447.411 1083.02 461.575 1097.62 468.143C1112.23 474.71 1128.36 475.626 1146.03 470.893L1155.02 468.484C1169.74 462.851 1181.4 454.654 1190.01 443.894C1198.85 432.736 1202.97 420.982 1202.37 408.635L1203.92 408.728L1213.68 445.159L1275.56 422.493L1208.37 171.729L1142.7 195.409ZM1377.46 407.358L1307.74 147.13L1339.28 136.144L1301.72 128.458L1280.17 48.0244L1357.41 20.2285L1411.06 31.2078L1432.61 111.642L1399.78 123.482L1436.26 130.948L1505.86 390.702L1430.99 417.864L1377.46 407.358ZM1286.04 51.0149L1305.06 121.986L1373.09 97.672L1354.07 26.7008L1286.04 51.0149ZM1313.61 150.121L1380.8 400.886L1446.47 377.206L1379.27 126.441L1313.61 150.121Z"
                className="fill-current"
                fillRule="nonzero"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_8_6">
                <rect
                  width="1512.64"
                  height="421.306"
                  fill="white"
                  transform="translate(-58 391.501) rotate(-15)"
                />
              </clipPath>
            </defs>
          </svg>

          {/* <svg
            width="100%"
            height="90%"
            viewBox="0 0 605 465"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M76.481 157.053C74.4223 158.726 71.9777 160.205 69.147 161.492C66.445 162.779 63.2283 163.551 59.497 163.808C58.4677 163.937 57.374 164.001 56.216 164.001C55.058 164.001 53.9643 164.001 52.935 164.001C42.6417 164.001 33.5063 161.814 25.529 157.439C17.6803 153.193 11.5043 146.502 7.001 137.367C2.62633 128.232 0.439 116.394 0.439 101.855C0.439 83.5843 3.913 69.4953 10.861 59.588C17.9377 49.6807 27.845 44.148 40.583 42.99C41.0977 42.99 41.548 42.99 41.934 42.99C42.4487 42.8613 42.9633 42.797 43.478 42.797C47.0807 42.797 50.1687 43.183 52.742 43.955C55.3153 44.727 57.6313 45.4347 59.69 46.078V3.232L91.149 0.529996L110.449 10.18V157.053L80.92 159.369L76.481 157.053ZM61.62 4.969V53.219L61.041 53.412C60.1403 50.8387 58.146 48.78 55.058 47.236C51.97 45.5633 48.11 44.727 43.478 44.727C43.092 44.727 42.6417 44.7913 42.127 44.92C41.741 44.92 41.2907 44.92 40.776 44.92C28.5527 46.078 19.0957 51.482 12.405 61.132C5.71433 70.6533 2.369 84.2277 2.369 101.855C2.369 118.839 5.457 131.577 11.633 140.069C17.9377 148.432 26.3653 152.614 36.916 152.614C37.5593 152.614 38.1383 152.614 38.653 152.614C39.2963 152.614 39.8753 152.55 40.39 152.421C46.4373 151.778 51.3267 149.912 55.058 146.824C58.7893 143.607 61.427 140.005 62.971 136.016L63.55 136.209V147.789L89.219 145.666V2.65299L61.62 4.969ZM45.408 126.945C41.2907 126.945 37.7523 124.822 34.793 120.576C31.9623 116.201 30.547 109.125 30.547 99.346C30.547 89.5673 31.898 82.4907 34.6 78.116C37.302 73.7413 41.4193 71.2967 46.952 70.782H48.689C52.0343 70.782 54.865 71.6183 57.181 73.291C59.497 74.9637 60.9767 77.151 61.62 79.853V106.487C61.62 112.277 60.2047 117.038 57.374 120.769C54.672 124.5 51.0693 126.559 46.566 126.945H45.408ZM59.69 84.485C56.8593 84.871 54.8007 86.9297 53.514 90.661C52.356 94.3923 51.777 100.504 51.777 108.996C51.777 111.698 51.8413 114.271 51.97 116.716C52.0987 119.032 52.4847 120.962 53.128 122.506C57.5027 118.903 59.69 113.564 59.69 106.487V84.485ZM234.48 127.138C231.006 137.946 225.859 146.695 219.04 153.386C212.349 160.077 203.214 163.937 191.634 164.966C190.219 165.095 188.803 165.159 187.388 165.159C186.101 165.288 184.75 165.352 183.335 165.352C172.141 165.352 162.041 163.036 153.034 158.404C144.156 153.901 137.079 147.081 131.804 137.946C126.529 128.811 123.891 117.488 123.891 103.978C123.891 92.1407 125.885 81.9117 129.874 73.291C133.991 64.6703 139.524 57.9153 146.472 53.026C153.549 48.008 161.59 45.113 170.597 44.341C171.498 44.2123 172.398 44.148 173.299 44.148C174.328 44.148 175.293 44.148 176.194 44.148C183.399 44.148 190.476 45.4347 197.424 48.008C204.501 50.4527 210.87 54.3127 216.531 59.588C222.321 64.8633 226.889 71.6827 230.234 80.046C233.708 88.2807 235.445 98.188 235.445 109.768C235.445 110.797 235.445 111.891 235.445 113.049C235.445 114.078 235.381 115.108 235.252 116.137L214.987 117.874L234.48 127.138ZM188.932 112.277C187.774 116.652 185.651 120.254 182.563 123.085C179.475 125.916 175.486 127.588 170.597 128.103H169.053C164.678 128.103 161.076 126.495 158.245 123.278C155.414 120.061 153.999 115.622 153.999 109.961L214.022 104.75C214.151 103.463 214.215 102.241 214.215 101.083C214.215 99.7963 214.215 98.574 214.215 97.416C214.215 81.204 210.741 68.5947 203.793 59.588C196.845 50.5813 187.259 46.078 175.036 46.078C174.393 46.078 173.685 46.078 172.913 46.078C172.27 46.078 171.562 46.1423 170.79 46.271C162.169 46.9143 154.449 49.6807 147.63 54.57C140.811 59.3307 135.471 65.8927 131.611 74.256C127.751 82.6193 125.821 92.5267 125.821 103.978C125.821 120.576 129.552 132.992 137.015 141.227C144.478 149.462 154.385 153.579 166.737 153.579C167.638 153.579 168.538 153.579 169.439 153.579C170.34 153.579 171.24 153.515 172.141 153.386C183.206 152.485 191.956 148.883 198.389 142.578C204.951 136.273 209.647 128.425 212.478 119.032L188.932 112.277ZM154.964 88.345C154.964 84.099 156.444 80.432 159.403 77.344C162.362 74.256 166.158 72.519 170.79 72.133H172.527C176.387 72.133 179.539 73.291 181.984 75.607C184.557 77.7943 185.844 81.1397 185.844 85.643L154.964 88.345ZM170.597 121.927C170.597 122.57 170.854 123.214 171.369 123.857C172.012 124.5 172.656 125.144 173.299 125.787C175.615 125.144 177.416 124.372 178.703 123.471C179.99 122.57 181.083 121.67 181.984 120.769L170.597 121.927ZM269.611 152.421L234.871 49.359L267.488 46.464L286.788 56.114L292.578 74.642L301.649 45.306L332.336 42.604L351.636 52.254L315.931 159.755L288.911 162.071L269.611 152.421ZM303.193 47.236L284.472 107.838L265.944 48.587L237.573 51.096L270.769 150.491L295.28 148.368L329.634 44.92L303.193 47.236ZM355.511 155.895V118.067L390.251 114.979L409.551 124.629V162.65L374.811 165.545L355.511 155.895ZM357.441 119.804V153.772L388.321 151.263V117.102L357.441 119.804ZM488.934 158.404C487.519 159.691 485.267 160.913 482.179 162.071C479.22 163.229 476.003 163.937 472.529 164.194C471.886 164.323 471.178 164.387 470.406 164.387C469.634 164.387 468.926 164.387 468.283 164.387C463.136 164.387 457.861 163.679 452.457 162.264C447.182 160.977 442.292 158.854 437.789 155.895C433.286 153.064 429.619 149.333 426.788 144.701C424.086 139.94 422.735 134.279 422.735 127.717V48.78L454.194 46.078L471.564 54.57V118.839C472.207 118.196 472.786 117.81 473.301 117.681C473.944 117.424 474.523 116.845 475.038 115.944V46.078L506.304 43.376L525.604 53.026V159.176L495.882 161.685L488.934 158.404ZM476.968 47.815V116.33C475.681 118.775 473.944 120.769 471.757 122.313C469.698 123.728 466.868 124.629 463.265 125.015H462.3C459.598 125.015 457.218 124.114 455.159 122.313C453.229 120.512 452.264 117.424 452.264 113.049V48.201L424.665 50.517V127.717C424.665 136.595 427.11 143.028 431.999 147.017C436.888 151.006 442.936 153 450.141 153H453.808C459.984 152.357 465.259 150.427 469.634 147.21C474.137 143.865 476.904 139.812 477.933 135.051L478.512 135.244V150.105L504.374 147.789V45.499L476.968 47.815ZM544.702 152.421V46.271L557.826 45.306L544.316 38.551V5.741L576.547 3.039L595.847 12.689V45.499L582.144 46.657L595.268 53.219V159.176L564.002 161.878L544.702 152.421ZM546.246 7.478V36.428L574.617 34.112V5.16199L546.246 7.478ZM546.632 48.008V150.298L574.038 147.982V45.692L546.632 48.008Z"
              fill="black"
            />
          </svg> */}
          {/* <svg width="360" height="147" viewBox="0 0 360 147" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M215.881 136.485V117.081L233.701 115.497L243.601 120.447V139.95L225.781 141.435L215.881 136.485ZM216.871 117.972V135.396L232.711 134.109V116.586L216.871 117.972ZM301.151 57.78L311.051 62.73V112.923C311.051 121.437 308.84 128.103 304.418 132.921C300.062 137.739 294.122 140.511 286.598 141.237C286.136 141.303 285.641 141.336 285.113 141.336C284.651 141.336 284.156 141.336 283.628 141.336C280.46 141.336 277.49 140.874 274.718 139.95C272.012 139.026 269.207 137.838 266.303 136.386C263.135 134.736 260.495 132.921 258.383 130.941C256.271 128.961 254.687 126.486 253.631 123.516C252.575 120.48 252.047 116.685 252.047 112.131V61.146L269.372 59.562L279.272 64.512V112.527C279.272 113.583 279.305 114.573 279.371 115.497C279.503 116.355 279.635 117.147 279.767 117.873C281.285 117.081 282.44 115.728 283.232 113.814C284.024 111.9 284.42 109.326 284.42 106.092V59.265L301.151 57.78ZM285.41 60.156V106.092C285.41 110.712 284.651 114.078 283.133 116.19C281.615 118.236 279.503 119.391 276.797 119.655H275.807C273.365 119.655 271.517 118.698 270.263 116.784C269.009 114.87 268.382 111.801 268.382 107.577V60.651L253.037 62.037V112.131C253.037 119.721 254.819 125.496 258.383 129.456C261.947 133.416 267.029 135.396 273.629 135.396C274.157 135.396 274.652 135.396 275.114 135.396C275.642 135.396 276.137 135.363 276.599 135.297C283.859 134.703 289.601 132.063 293.825 127.377C298.049 122.625 300.161 116.157 300.161 107.973V58.869L285.41 60.156ZM324.182 134.802V59.562L341.408 57.978L351.308 62.928V138.168L334.082 139.653L324.182 134.802ZM325.172 60.453V133.713L340.418 132.327V59.067L325.172 60.453Z" fill="#001C35"/>
<path d="M48.372 137.436C47.1347 138.441 45.6653 139.331 43.964 140.104C42.34 140.877 40.4067 141.341 38.164 141.496C37.5453 141.573 36.888 141.612 36.192 141.612C35.496 141.612 34.8387 141.612 34.22 141.612C28.0333 141.612 22.5427 140.297 17.748 137.668C13.0307 135.116 9.31867 131.095 6.612 125.604C3.98267 120.113 2.668 112.999 2.668 104.26C2.668 93.2787 4.756 84.8107 8.932 78.856C13.1853 72.9013 19.14 69.576 26.796 68.88C27.1053 68.88 27.376 68.88 27.608 68.88C27.9173 68.8027 28.2267 68.764 28.536 68.764C30.7013 68.764 32.5573 68.996 34.104 69.46C35.6507 69.924 37.0427 70.3493 38.28 70.736V44.984L57.188 43.36L68.788 49.16V137.436L51.04 138.828L48.372 137.436ZM39.44 46.028V75.028L39.092 75.144C38.5507 73.5973 37.352 72.36 35.496 71.432C33.64 70.4267 31.32 69.924 28.536 69.924C28.304 69.924 28.0333 69.9627 27.724 70.04C27.492 70.04 27.2213 70.04 26.912 70.04C19.5653 70.736 13.8813 73.984 9.86 79.784C5.83867 85.5067 3.828 93.6653 3.828 104.26C3.828 114.468 5.684 122.124 9.396 127.228C13.1853 132.255 18.2507 134.768 24.592 134.768C24.9787 134.768 25.3267 134.768 25.636 134.768C26.0227 134.768 26.3707 134.729 26.68 134.652C30.3147 134.265 33.2533 133.144 35.496 131.288C37.7387 129.355 39.324 127.189 40.252 124.792L40.6 124.908V131.868L56.028 130.592V44.636L39.44 46.028ZM29.696 119.34C27.2213 119.34 25.0947 118.064 23.316 115.512C21.6147 112.883 20.764 108.629 20.764 102.752C20.764 96.8747 21.576 92.6213 23.2 89.992C24.824 87.3627 27.2987 85.8933 30.624 85.584H31.668C33.6787 85.584 35.38 86.0867 36.772 87.092C38.164 88.0973 39.0533 89.412 39.44 91.036V107.044C39.44 110.524 38.5893 113.385 36.888 115.628C35.264 117.871 33.0987 119.108 30.392 119.34H29.696ZM38.28 93.82C36.5787 94.052 35.3413 95.2893 34.568 97.532C33.872 99.7747 33.524 103.448 33.524 108.552C33.524 110.176 33.5627 111.723 33.64 113.192C33.7173 114.584 33.9493 115.744 34.336 116.672C36.9653 114.507 38.28 111.297 38.28 107.044V93.82ZM143.335 119.456C141.247 125.952 138.154 131.211 134.055 135.232C130.034 139.253 124.543 141.573 117.583 142.192C116.733 142.269 115.882 142.308 115.031 142.308C114.258 142.385 113.446 142.424 112.595 142.424C105.867 142.424 99.7966 141.032 94.3832 138.248C89.0472 135.541 84.7939 131.443 81.6232 125.952C78.4526 120.461 76.8672 113.656 76.8672 105.536C76.8672 98.4213 78.0659 92.2733 80.4632 87.092C82.9379 81.9107 86.2632 77.8507 90.4392 74.912C94.6926 71.896 99.5259 70.156 104.939 69.692C105.481 69.6147 106.022 69.576 106.563 69.576C107.182 69.576 107.762 69.576 108.303 69.576C112.634 69.576 116.887 70.3493 121.063 71.896C125.317 73.3653 129.145 75.6853 132.547 78.856C136.027 82.0267 138.773 86.1253 140.783 91.152C142.871 96.1013 143.915 102.056 143.915 109.016C143.915 109.635 143.915 110.292 143.915 110.988C143.915 111.607 143.877 112.225 143.799 112.844L131.619 113.888L143.335 119.456ZM115.959 110.524C115.263 113.153 113.987 115.319 112.131 117.02C110.275 118.721 107.878 119.727 104.939 120.036H104.011C101.382 120.036 99.2166 119.069 97.5152 117.136C95.8139 115.203 94.9632 112.535 94.9632 109.132L131.039 106C131.117 105.227 131.155 104.492 131.155 103.796C131.155 103.023 131.155 102.288 131.155 101.592C131.155 91.848 129.067 84.2693 124.891 78.856C120.715 73.4427 114.954 70.736 107.607 70.736C107.221 70.736 106.795 70.736 106.331 70.736C105.945 70.736 105.519 70.7747 105.055 70.852C99.8739 71.2387 95.2339 72.9013 91.1352 75.84C87.0366 78.7013 83.8272 82.6453 81.5072 87.672C79.1872 92.6987 78.0272 98.6533 78.0272 105.536C78.0272 115.512 80.2699 122.975 84.7552 127.924C89.2406 132.873 95.1952 135.348 102.619 135.348C103.161 135.348 103.702 135.348 104.243 135.348C104.785 135.348 105.326 135.309 105.867 135.232C112.518 134.691 117.777 132.525 121.643 128.736C125.587 124.947 128.41 120.229 130.111 114.584L115.959 110.524ZM95.5432 96.14C95.5432 93.588 96.4326 91.384 98.2112 89.528C99.9899 87.672 102.271 86.628 105.055 86.396H106.099C108.419 86.396 110.314 87.092 111.783 88.484C113.33 89.7987 114.103 91.8093 114.103 94.516L95.5432 96.14ZM104.939 116.324C104.939 116.711 105.094 117.097 105.403 117.484C105.79 117.871 106.177 118.257 106.563 118.644C107.955 118.257 109.038 117.793 109.811 117.252C110.585 116.711 111.242 116.169 111.783 115.628L104.939 116.324ZM164.45 134.652L143.57 72.708L163.174 70.968L174.774 76.768L178.254 87.904L183.706 70.272L202.15 68.648L213.75 74.448L192.29 139.06L176.05 140.452L164.45 134.652ZM184.634 71.432L173.382 107.856L162.246 72.244L145.194 73.752L165.146 133.492L179.878 132.216L200.526 70.04L184.634 71.432Z" fill="#001C35"/>
</svg> */}

          {/* <svg
            width="100%"
            viewBox="0 0 555 455"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
<path d="M215.881 136.485V117.081L233.701 115.497L243.601 120.447V139.95L225.781 141.435L215.881 136.485ZM216.871 117.972V135.396L232.711 134.109V116.586L216.871 117.972ZM301.151 57.78L311.051 62.73V112.923C311.051 121.437 308.84 128.103 304.418 132.921C300.062 137.739 294.122 140.511 286.598 141.237C286.136 141.303 285.641 141.336 285.113 141.336C284.651 141.336 284.156 141.336 283.628 141.336C280.46 141.336 277.49 140.874 274.718 139.95C272.012 139.026 269.207 137.838 266.303 136.386C263.135 134.736 260.495 132.921 258.383 130.941C256.271 128.961 254.687 126.486 253.631 123.516C252.575 120.48 252.047 116.685 252.047 112.131V61.146L269.372 59.562L279.272 64.512V112.527C279.272 113.583 279.305 114.573 279.371 115.497C279.503 116.355 279.635 117.147 279.767 117.873C281.285 117.081 282.44 115.728 283.232 113.814C284.024 111.9 284.42 109.326 284.42 106.092V59.265L301.151 57.78ZM285.41 60.156V106.092C285.41 110.712 284.651 114.078 283.133 116.19C281.615 118.236 279.503 119.391 276.797 119.655H275.807C273.365 119.655 271.517 118.698 270.263 116.784C269.009 114.87 268.382 111.801 268.382 107.577V60.651L253.037 62.037V112.131C253.037 119.721 254.819 125.496 258.383 129.456C261.947 133.416 267.029 135.396 273.629 135.396C274.157 135.396 274.652 135.396 275.114 135.396C275.642 135.396 276.137 135.363 276.599 135.297C283.859 134.703 289.601 132.063 293.825 127.377C298.049 122.625 300.161 116.157 300.161 107.973V58.869L285.41 60.156ZM324.182 134.802V59.562L341.408 57.978L351.308 62.928V138.168L334.082 139.653L324.182 134.802ZM325.172 60.453V133.713L340.418 132.327V59.067L325.172 60.453Z" fill="#001C35"/>
<path d="M48.372 137.436C47.1347 138.441 45.6653 139.331 43.964 140.104C42.34 140.877 40.4067 141.341 38.164 141.496C37.5453 141.573 36.888 141.612 36.192 141.612C35.496 141.612 34.8387 141.612 34.22 141.612C28.0333 141.612 22.5427 140.297 17.748 137.668C13.0307 135.116 9.31867 131.095 6.612 125.604C3.98267 120.113 2.668 112.999 2.668 104.26C2.668 93.2787 4.756 84.8107 8.932 78.856C13.1853 72.9013 19.14 69.576 26.796 68.88C27.1053 68.88 27.376 68.88 27.608 68.88C27.9173 68.8027 28.2267 68.764 28.536 68.764C30.7013 68.764 32.5573 68.996 34.104 69.46C35.6507 69.924 37.0427 70.3493 38.28 70.736V44.984L57.188 43.36L68.788 49.16V137.436L51.04 138.828L48.372 137.436ZM39.44 46.028V75.028L39.092 75.144C38.5507 73.5973 37.352 72.36 35.496 71.432C33.64 70.4267 31.32 69.924 28.536 69.924C28.304 69.924 28.0333 69.9627 27.724 70.04C27.492 70.04 27.2213 70.04 26.912 70.04C19.5653 70.736 13.8813 73.984 9.86 79.784C5.83867 85.5067 3.828 93.6653 3.828 104.26C3.828 114.468 5.684 122.124 9.396 127.228C13.1853 132.255 18.2507 134.768 24.592 134.768C24.9787 134.768 25.3267 134.768 25.636 134.768C26.0227 134.768 26.3707 134.729 26.68 134.652C30.3147 134.265 33.2533 133.144 35.496 131.288C37.7387 129.355 39.324 127.189 40.252 124.792L40.6 124.908V131.868L56.028 130.592V44.636L39.44 46.028ZM29.696 119.34C27.2213 119.34 25.0947 118.064 23.316 115.512C21.6147 112.883 20.764 108.629 20.764 102.752C20.764 96.8747 21.576 92.6213 23.2 89.992C24.824 87.3627 27.2987 85.8933 30.624 85.584H31.668C33.6787 85.584 35.38 86.0867 36.772 87.092C38.164 88.0973 39.0533 89.412 39.44 91.036V107.044C39.44 110.524 38.5893 113.385 36.888 115.628C35.264 117.871 33.0987 119.108 30.392 119.34H29.696ZM38.28 93.82C36.5787 94.052 35.3413 95.2893 34.568 97.532C33.872 99.7747 33.524 103.448 33.524 108.552C33.524 110.176 33.5627 111.723 33.64 113.192C33.7173 114.584 33.9493 115.744 34.336 116.672C36.9653 114.507 38.28 111.297 38.28 107.044V93.82ZM143.335 119.456C141.247 125.952 138.154 131.211 134.055 135.232C130.034 139.253 124.543 141.573 117.583 142.192C116.733 142.269 115.882 142.308 115.031 142.308C114.258 142.385 113.446 142.424 112.595 142.424C105.867 142.424 99.7966 141.032 94.3832 138.248C89.0472 135.541 84.7939 131.443 81.6232 125.952C78.4526 120.461 76.8672 113.656 76.8672 105.536C76.8672 98.4213 78.0659 92.2733 80.4632 87.092C82.9379 81.9107 86.2632 77.8507 90.4392 74.912C94.6926 71.896 99.5259 70.156 104.939 69.692C105.481 69.6147 106.022 69.576 106.563 69.576C107.182 69.576 107.762 69.576 108.303 69.576C112.634 69.576 116.887 70.3493 121.063 71.896C125.317 73.3653 129.145 75.6853 132.547 78.856C136.027 82.0267 138.773 86.1253 140.783 91.152C142.871 96.1013 143.915 102.056 143.915 109.016C143.915 109.635 143.915 110.292 143.915 110.988C143.915 111.607 143.877 112.225 143.799 112.844L131.619 113.888L143.335 119.456ZM115.959 110.524C115.263 113.153 113.987 115.319 112.131 117.02C110.275 118.721 107.878 119.727 104.939 120.036H104.011C101.382 120.036 99.2166 119.069 97.5152 117.136C95.8139 115.203 94.9632 112.535 94.9632 109.132L131.039 106C131.117 105.227 131.155 104.492 131.155 103.796C131.155 103.023 131.155 102.288 131.155 101.592C131.155 91.848 129.067 84.2693 124.891 78.856C120.715 73.4427 114.954 70.736 107.607 70.736C107.221 70.736 106.795 70.736 106.331 70.736C105.945 70.736 105.519 70.7747 105.055 70.852C99.8739 71.2387 95.2339 72.9013 91.1352 75.84C87.0366 78.7013 83.8272 82.6453 81.5072 87.672C79.1872 92.6987 78.0272 98.6533 78.0272 105.536C78.0272 115.512 80.2699 122.975 84.7552 127.924C89.2406 132.873 95.1952 135.348 102.619 135.348C103.161 135.348 103.702 135.348 104.243 135.348C104.785 135.348 105.326 135.309 105.867 135.232C112.518 134.691 117.777 132.525 121.643 128.736C125.587 124.947 128.41 120.229 130.111 114.584L115.959 110.524ZM95.5432 96.14C95.5432 93.588 96.4326 91.384 98.2112 89.528C99.9899 87.672 102.271 86.628 105.055 86.396H106.099C108.419 86.396 110.314 87.092 111.783 88.484C113.33 89.7987 114.103 91.8093 114.103 94.516L95.5432 96.14ZM104.939 116.324C104.939 116.711 105.094 117.097 105.403 117.484C105.79 117.871 106.177 118.257 106.563 118.644C107.955 118.257 109.038 117.793 109.811 117.252C110.585 116.711 111.242 116.169 111.783 115.628L104.939 116.324ZM164.45 134.652L143.57 72.708L163.174 70.968L174.774 76.768L178.254 87.904L183.706 70.272L202.15 68.648L213.75 74.448L192.29 139.06L176.05 140.452L164.45 134.652ZM184.634 71.432L173.382 107.856L162.246 72.244L145.194 73.752L165.146 133.492L179.878 132.216L200.526 70.04L184.634 71.432Z" fill="#001C35"/>

          </svg> */}
        </div>
      </div>
      <div className="container flex relative z-10 flex-col justify-center items-center p-6 mx-auto py-24 text-center">
        <div className="flex flex-col dark:text-white  justify-center p-6 text-center rounded-sm  ">
          {/* <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Kickstart your next
            <span className="dark:text-indigo-400 mx-2">website</span>in minutes
          </h1> */}
          <h1 className="hero-title text-[72px] font-bold leading-none "> dev.UI </h1>
          {/* <h1 className="mt-6 mb-8 text-lg sm:mb-12 >
            Dev UI is a free, open-source collection of UI components and
            templates based on Tailwind CSS
          </h1> */}
          <h1 className="hero-title text-3xl font-semibold flex flex-col my-4 " > Collection of UI components <span> and templates  </span></h1>
          <div className="flex  items-center  justify-center ">
            <Link href="/components">
              <span className="px-8 py-3 min-h-[3rem]  active:scale-105 scale-110 active:transition-all text-lg font-bold rounded bg-indigo-500 text-white ">
                Components
              </span>
            </Link>{" "}
          </div>
        </div>
        {/* <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="/javascript_illustration.png"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 "
          />
        </div> */}
      </div>
    </section>
  );
}
//In a matter of minutes, you can launch your next website.
