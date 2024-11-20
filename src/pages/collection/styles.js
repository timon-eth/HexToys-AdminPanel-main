import styled from 'styled-components';

export const Container = styled.div`
     
    .bg-cusBrightLink{
        --tw-bg-opacity: 1;
        background-color: rgb(7 245 254);
    }
    .lightBlueBg{
        border: 1px solid rgba(120,120,120,.171);
        -webkit-filter: drop-shadow(0 3px 20px rgba(0,0,0,.043));
        filter: drop-shadow(0 3px 20px rgba(0,0,0,.043));
        z-index: 2;
    }     

    .upload_file_box {
        background: #fff;
        border    : 2px dashed #d8d8d8;
        height: 200px;
        input{
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            opacity: 0;
        }
        button{
            position: relative;
        }
    }
    .preview_file_box {
        background: #fff;
        border    : 2px dashed #d8d8d8;
        display: flex;
        flex-direction: column;   
        align-items: flex-end;     
        height: 200px;
        .mediaContainer{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;  
            width: 100%;  
            height: 160px;
            .preview{
                border-radius: 6px;
                max-width: 80%;
                max-height: 100%;
            }
        }
    }

    .property-remove-button{
        background: transparent;
        border: none;
        vertical-align: middle;
        margin-left: 10px;
    }

    .dx-htmleditor-content img {
        vertical-align: middle;
        padding-right: 10px;
    }
    
    .value-content {
        margin-top: 20px;
        overflow: auto;
        height: 110px;
        width: 100%;
        white-space: pre-wrap;
    }
    
    .options {
        margin-top: 20px;
        padding: 20px;
        background-color: rgba(191, 191, 191, 0.15);
        box-sizing: border-box;
        width: 100%;
    }
    .profile_logo_upload_file_box {
        width: 150px;
        height: 150px;
        background: #fff;
        border    : 2px dashed var(--paymentSystemBorder);
        input{
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            opacity: 0;
        }
        button{
            position: relative;
        }
    }
    .selected{
        background: #23bf44;
    }
    .media-info {
        margin-top: 2rem;
        img {
            max-width: 200px;
            border-radius: 5px;
            border: solid 2px #000;
            top: 5px;
            left: 5px;
        }
    }

    @media only screen and (min-width: 0px) {
        padding: 0px 20px;
        .media-info {
            img {
                max-width: 100px;                
            }
        }
    }
    @media only screen and (min-width: 640px) {
        max-width: 480px;
        .media-info {
            img {
                max-width: 130px;                
            }
        }
    } 
    @media only screen and (min-width: 769px) {
        max-width: 540px;
        .media-info {
            img {
                max-width: 160px;                
            }
        }
    }
    @media only screen and (min-width: 1024px) {
        max-width: 740px;
        .media-info {
            img {
                max-width: 180px;                
            }
        }
    } 
    @media only screen and (min-width: 1280px) {
        max-width: 908px;
        .media-info {
            img {
                max-width: 200px;                
            }
        }
    } 
    @media only screen and (min-width: 1536px) {
        max-width: 1024px;
    }  
     
`