# kintone_openingcrawl
Forked from mismith0227
This kintone customization represents the contents of the record list of kintone as an opening crawl.
This customization is for the Custom View for kintone Apps.

##How to use
Create a kintone application, with several fields inside.  
Create a new view inside kintone. Select the Custom View when creating the new view, and insert the HTML written under the "customize_view" file.  
When doing this, note down the View ID that is listed on the page of your kintone settings.  
After creating the view, go to the JavaScript and CSS settings. Upload the necessary JavaScript and CSS files to kintone.  
You may need to alter the JavaScript slightly to fit your kintone app. You must first change the View ID that is listed near the beginning to the View ID that you noted earlier.  
You may also need to change the array numbers that are specifying the label name of your forms.  
After the upload, apply the changes to your app, and check your Custom View to see your kintone data flow like an opening crawl.  

##Dependancy
This customization is dependant on jquery 2.1.4
This customization only works for kintone with the new user interface design. It is not supported for the classic design.  
To check if your kintone environment is running on the new user interface design, run  
kintone.getUiVersion();  
on your console. If it returns "1", you are using the classic design. If it returns "2", you are using the new interface design.

##Warning
Class names may change due to a kintone update, causing this customization to specify wrong class names. In that case, class names will need to be updated inside the code.

##Compatibility
Windows Chrome

##Thanks
Great thanks to mismith0227 for original code for the opening crawl!
