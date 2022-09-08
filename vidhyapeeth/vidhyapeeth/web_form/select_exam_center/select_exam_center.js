// // frappe.ready(function() {
// // 	// bind events here
// // })
// let a = '';
// frappe.ready(function() {
// 	// bind events here
// 	frappe.web_form.after_load = () => {
//     // init script here
//     frappe.call({
//             method: 'vidhyapeeth.vidhyapeeth.web_form.select_exam_center.select_exam_center.get_selected_exam_centre',
//         }).done((r) => {
// 	    //  alert(r.message); // if you are returning anything
// 		frappe.web_form.set_value('select_exam_centre', r.message)
//      }).fail((r) => {
// 	     console.log(r);
//      });
// 	}

//      frappe.web_form.validate = () => {
// 		// return false if not valid
// 		let exam_centre =  frappe.web_form.get_value('select_exam_centre')
// 		 if(exam_centre == null){
// 			frappe.msgprint('Please select Exam Centre');
// 			return false;
// 		 }
// 		 else{
// 			frappe.call({
// 				method: 'vidhyapeeth.vidhyapeeth.web_form.select_exam_center.select_exam_center.check_user_selected',
// 				args:{
// 				'selected_exam_centre': frappe.web_form.get_value('select_exam_centre')
// 				}
// 			}).done((r) => {
// //				window.location.reload();
// 				alert(r.message) // if you are returning anything
// //				r.frappe.msgprint('Your Exam center is ', $exam_centre)
				
// 			}).fail((r) => {
// 				alert(r);
// 			});
// 			// if(a != null){
// 			// 	if(a === 'your exam centre is selected')
// 			// 	{
// 			// 		return true;
// 			// 	}
// 			// 	else
// 			// 	{
// 			// 		return false;
// 			// 	}
// 			// }
// 			// // return true;
// 		}
// 	 }
// })



frappe.ready(function() {
	// bind events here
	frappe.web_form.after_load = () => {
    // init script here
    frappe.call({
            method: 'vidhyapeeth.vidhyapeeth.web_form.select_exam_center.select_exam_center.get_selected_exam_centre',
        }).done((r) => {
//	     alert(r.message); // if you are returning anything
		frappe.web_form.set_value('select_exam_centre', r.message)
     }).fail((r) => {
	     console.log(r);
     });
	}

     frappe.web_form.validate = () => {
		// return false if not valid
		let exam_center =  frappe.web_form.get_value('select_exam_centre')
		 if(exam_center == null){
			frappe.msgprint('Please select Exam Centre');
			return false;
		 }
		 else{
			frappe.call({
				method: 'vidhyapeeth.vidhyapeeth.web_form.select_exam_center.select_exam_center.check_user_selected',
				args:{
				'selected_exam_centre': frappe.web_form.get_value('select_exam_centre')
				}
			}).done((r) => {
//				window.location.reload();
				// alert(r.message) // if you are returning anything
//				r.frappe.msgprint('Your Exam center is ', $exam_center)
			}).fail((r) => {
			//	     alert(r);
			});
		}return true
	}
	
})