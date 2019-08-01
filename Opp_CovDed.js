function pSelectType()
{
	var pType = Xrm.Page.getAttribute('new_type').getText();

	switch (pType)
	{
		case "Deductible":
			Xrm.Page.ui.tabs.get("General").sections.get("tabDeductible").setVisible(true);
			Xrm.Page.ui.tabs.get("General").sections.get("tabAdditionalCoveredRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabConditions").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabCoveredPIRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabExcludedRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInformation").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInstalments").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInsuranceTax").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabWarrantiesRestrictions").setVisible(false);
			break;
		case "Additional Covered Risks":
			Xrm.Page.ui.tabs.get("General").sections.get("tabDeductible").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabAdditionalCoveredRisks").setVisible(true);
			Xrm.Page.ui.tabs.get("General").sections.get("tabConditions").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabCoveredPIRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabExcludedRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInformation").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInstalments").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInsuranceTax").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabWarrantiesRestrictions").setVisible(false);	
			break;
		case "Conditions":
			Xrm.Page.ui.tabs.get("General").sections.get("tabDeductible").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabAdditionalCoveredRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabConditions").setVisible(true);
			Xrm.Page.ui.tabs.get("General").sections.get("tabCoveredPIRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabExcludedRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInformation").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInstalments").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInsuranceTax").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabWarrantiesRestrictions").setVisible(false);	
			break;	
		case "Covered P&I Risks":
			Xrm.Page.ui.tabs.get("General").sections.get("tabDeductible").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabAdditionalCoveredRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabConditions").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabCoveredPIRisks").setVisible(true);
			Xrm.Page.ui.tabs.get("General").sections.get("tabExcludedRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInformation").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInstalments").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInsuranceTax").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabWarrantiesRestrictions").setVisible(false);	
			break;				
		case "Excluded Risks":
			Xrm.Page.ui.tabs.get("General").sections.get("tabDeductible").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabAdditionalCoveredRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabConditions").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabCoveredPIRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabExcludedRisks").setVisible(true);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInformation").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInstalments").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInsuranceTax").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabWarrantiesRestrictions").setVisible(false);	
			break;				
		case "Information":
			Xrm.Page.ui.tabs.get("General").sections.get("tabDeductible").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabAdditionalCoveredRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabConditions").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabCoveredPIRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabExcludedRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInformation").setVisible(true);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInstalments").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInsuranceTax").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabWarrantiesRestrictions").setVisible(false);	
			break;				
		case "Instalments":
			Xrm.Page.ui.tabs.get("General").sections.get("tabDeductible").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabAdditionalCoveredRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabConditions").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabCoveredPIRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabExcludedRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInformation").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInstalments").setVisible(true);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInsuranceTax").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabWarrantiesRestrictions").setVisible(false);	
			break;			
		case "Insurance Tax":
			Xrm.Page.ui.tabs.get("General").sections.get("tabDeductible").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabAdditionalCoveredRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabConditions").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabCoveredPIRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabExcludedRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInformation").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInstalments").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInsuranceTax").setVisible(true);
			Xrm.Page.ui.tabs.get("General").sections.get("tabWarrantiesRestrictions").setVisible(false);	
			break;
		case "Warranties & Restrictions":
			Xrm.Page.ui.tabs.get("General").sections.get("tabDeductible").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabAdditionalCoveredRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabConditions").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabCoveredPIRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabExcludedRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInformation").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInstalments").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInsuranceTax").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabWarrantiesRestrictions").setVisible(true);	
			break;
		default:	
			Xrm.Page.ui.tabs.get("General").sections.get("tabDeductible").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabAdditionalCoveredRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabConditions").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabCoveredPIRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabExcludedRisks").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInformation").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInstalments").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabInsuranceTax").setVisible(false);
			Xrm.Page.ui.tabs.get("General").sections.get("tabWarrantiesRestrictions").setVisible(false);
			break;
	}
}

function UIRefresh()
{
	Xrm.Page.ui.refresh()
}


function pSelectShort()
{
	var quickViewControl = Xrm.Page.ui.quickForms.get("DC_QV");
	if (quickViewControl != undefined)
	{
		if (quickViewControl.isLoaded())
		{
			//alert("loaded");
			var pShortText = quickViewControl.getControl(1).getAttribute().getValue();
			
			//if (pShortText.indexOf("{new_string1}") > 0)
			//	{Xrm.Page.getControl("new_string1").setVisible(true);}
			//else
			//	{Xrm.Page.getControl("new_string1").setVisible(false);}
			pCheckMergeField(pShortText, "new_string1");
				

				
				
				
				
			//alert(pShortText);
			return;
		}
		else
		{
			//alert("not loaded");
			// Wait for some time and check again
			setTimeout(pSelectShort, 10);
			return;
		}
	}
	else
	{
		//alert("undefined");
		//Xrm.Page.getattribute("new_primary").setValue("No Value");
		return;
	}  
}

function pCheckMergeField(vText, vField)
{
	if (vText.indexOf("{" & vField & }") > 0)
	{
		Xrm.Page.getControl(vField).setVisible(true);
	}
	else
	{
		Xrm.Page.getControl(vField).setVisible(false);
	}
}