
module.exports = {

    user:(app, req, res)=>{

        req.assert('_name', 'o nome e obrigatorio.').notEmpty();
        req.assert('_email', 'o e-mail esta invalido.').notEmpty().isEmail();
       
        let errors = req.validationErrors();
       
        if ( errors ) {
             app.utils.error.send(errors, req, res);
             return false;
       
         }  else{
                 return true;
                }

        }
      };
