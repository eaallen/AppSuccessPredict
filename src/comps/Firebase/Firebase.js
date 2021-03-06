import app from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import React from 'react' 
import axios from 'axios'
export const AppContext = React.createContext()

    const config = {
      apiKey: "AIzaSyB1Bx1lE918l6rzbn1jbaUYm5SoeUGj514",
      authDomain: "app-predict.firebaseapp.com",
      databaseURL: "https://app-predict.firebaseio.com",
      projectId: "app-predict",
      storageBucket: "app-predict.appspot.com",
      messagingSenderId: "793462500548",
      appId: "1:793462500548:web:2d3acab38914c47be42d91",
      measurementId: "G-NF8J2W7W50"
    };
   
    class Firebase extends React.Component {
        constructor(props) {
          super(props)
          this.actions={
            updateUserAuth: this.updateUserAuth,
            loader: this.loader,
            doCreateUserWithEmailAndPassword:this.doCreateUserWithEmailAndPassword,
            doSignInWithEmailAndPassword:this.doSignInWithEmailAndPassword,
            doSignInWithGoogle:this.doSignInWithGoogle,
            doSignInWithRedirect:this.doSignInWithRedirect,
            doGetRedirectResult:this.doGetRedirectResult,
            doSignOut:this.doSignOut,
            doPasswordReset:this.doPasswordReset,
            doPasswordUpdate:this.doPasswordUpdate,
            doAddRecord:this.doAddRecord,
            doGetQueryRecord:this.doGetQueryRecord,
            getOneRecord:this.getOneRecord,
            checkState: this.checkState,
            user: this.user,
            addData: this.addData,
            azure: this.azure,
          }
          this.state = {
            test:'this is comming from the firbase context provider',
            loading: null,
            db_resp: null,
            azure_resp:null,
            // user: null
          }
          console.log('here')
          app.initializeApp(config);

          this.auth = app.auth();
          this.db = app.firestore()
          this.googleProvider =new app.auth.GoogleAuthProvider();
          this.auth.onAuthStateChanged(function(user) {
            if (user){
              console.log('we have a user!')
            }else{
              console.log('no user... :(')
            }    
          });
        }

        
        updateUserAuth = (userInfo) =>{
          // this.state.auth_user = userInfo
          // // this.state.auth_user = userInfo          
          // // this.setState({auth_user: userInfo})
        }
        doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

        doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
        
        doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);
        
        //////////////////GOOGLE OAUTH2 REDIRECT/////////////////////
        doSignInWithRedirect = () => this.auth.signInWithRedirect(this.googleProvider);
        doGetRedirectResult = () => this.auth.getRedirectResult();

        doSignOut = () => this.auth.signOut();
        doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
        doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
        doAddRecord = (_collection) => this.db.collection(_collection).doc();
        doGetQueryRecord = (_collection, item_looking_for,filtering_item) => this.db.collection(_collection).where(item_looking_for, '==',filtering_item).get();
        getOneRecord = (_collection, item_wanted) => this.db.collection(_collection).doc(item_wanted)
        checkState = async() =>{ await
          this.auth.onAuthStateChanged(function(user) {
            if (user){
              console.log('user accorfing to firebase')
            }else{
              console.log('according to firebase: no user info')
            }    
          });
        }
        user = () => this.auth.currentUser
    
        loader=()=>{          
          this.setState({...this.state, loading:true})
        }

        /*******************************************************************
         * METHODS SPECIFIC 
         * TO THIS PROJECT
         ****************************************************************/
        
        addData = async(formData) =>{
          console.log('IIIIIMMMMM')
          const post =  await axios.post('https://app-predict.azurewebsites.net/appstore/284882215/',formData)
          let resp = post
          console.log('--->',resp)
          this.setState({...this.state, db_resp:resp.statusText})
        }
        azure = async(data) =>{
          // const post =  await axios.post('https://app-predict.azurewebsites.net/azure/',data)
          const post =  await axios.post('https://app-predict.azurewebsites.net/azure/',data)
          let resp = JSON.parse(post.data)
          console.log('---->',resp)
          console.log('---->',resp.Results.output1.value.Values[0])
          if(resp.Results.output1.value.Values[0][0]){
            this.setState({...this.state, azure_resp:resp.Results.output1.value.Values[0][0]})
          }else{
            this.setState({...this.state, azure_resp:'ERROR'})
          }
          
        }





      async componentDidMount(){
        

      }
        render(){
          return(
            <AppContext.Provider value={{...this.state, ...this.actions }}>
              {this.props.children}
            </AppContext.Provider>
          )
        }
        
    }
export default Firebase;